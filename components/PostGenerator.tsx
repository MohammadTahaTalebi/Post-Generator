"use client";

import Markdown from "react-markdown";
import { useState } from "react";
import Image from "next/image";

export default function PostGenerator() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleGenerate() {
    if (!idea.trim() || loading) return;
    setLoading(true);
    setPost(null);
    setCopied(false);

    try {
      const res = await fetch("/api/postGenerator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: idea }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setPost(typeof data.postGenerator === "string" ? data.postGenerator : "");
    } catch (err: any) {
      setPost(`Error: ${err?.message || "Something went wrong."}`);
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    if (!post) return;
    navigator.clipboard.writeText(post);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="min-h-screen bg-[#fdf7ef] flex items-center justify-center px-4 py-25 flex-col flex-wrap gap-20">
      <div className="flex gap-5">
        <Image className="md:w-[150px] md:h-[107.5px] w-[75px] h-[54px]" alt="" width={150} height={107.5} src={"/robotHead.png"}></Image>
        <h2 className="md:text-6xl text-4xl max-[462px]:text-2xl font-bold my-auto">Generate your post</h2>
      </div>
      <div className="w-full max-w-6xl grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-stretch">
      
        <div className="flex flex-col justify-between gap-8">
          <div className="mb-10">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              rows={6}
              placeholder="Describe the idea, story, or insight you want to share on LinkedIn..."
              className="w-full rounded-2xl border border-slate-200 mb-2 bg-white/80 px-4 py-3 text-sm sm:text-base text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition resize-none"
            />

            <button
              onClick={handleGenerate}
              disabled={loading || !idea.trim()}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 text-white text-sm sm:text-base font-semibold py-3 shadow-[0_18px_45px_rgba(56,189,248,0.35)] hover:bg-sky-400 active:scale-[0.99] transition disabled:opacity-60 disabled:shadow-none disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="inline-block h-4 w-4 sm:h-5 sm:w-5 rounded-full border-2 border-white/50 border-t-transparent animate-spin" />
                  <span>Generating post...</span>
                </>
              ) : (
                <span>Generate my LinkedIn post</span>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative flex-1 min-h-[260px] rounded-3xl bg-white border border-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/80">
              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-500">Generated LinkedIn post</span>
                <span className="text-[0.7rem] text-slate-400">Markdown friendly, ready to paste</span>
              </div>
              {post && (
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 text-[0.7rem] sm:text-xs font-medium text-slate-800 hover:bg-sky-50 transition"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              )}
            </div>

            <div className="px-5 py-4 h-full overflow-auto">
              {post ? (
                <div className="prose max-w-none text-sm sm:text-base prose-p:mb-3 prose-headings:mb-2 prose-ul:list-disc prose-ul:pl-5 prose-ul:mt-2 prose-ul:mb-3 text-slate-900">
                  <Markdown>{post}</Markdown>
                </div>
              ) : (
                <div className="h-full flex flex-col gap-2 text-sm sm:text-base text-gray-300">
                  <p>_______________________________________</p>
                  <p>_________________________</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
