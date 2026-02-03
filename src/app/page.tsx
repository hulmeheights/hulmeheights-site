export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#d4d0c8]">
      <div className="max-w-[680px] mx-auto px-6 py-[60px]">
        
        {/* Header */}
        <header className="text-center mb-[60px]">
          <div className="text-xs text-[#666] uppercase tracking-[2px] mb-2">@hulmeheights</div>
          <h1 className="text-[42px] font-normal text-[#e8e4dc] tracking-[-1px] mb-4 leading-tight">Precision</h1>
          <p className="text-lg text-[#888] font-light">Clear thinking. Precise words. Better outcomes.</p>
        </header>

        {/* Value Prop */}
        <div className="bg-[#111] border border-[#1a1a1a] rounded-lg p-8 mb-10">
          <h2 className="text-xl text-[#e8e4dc] mb-4 font-medium">The problem</h2>
          <p className="text-[#999] text-base leading-relaxed">
            Most people don't lack discipline. They lack clarity on what they're actually doing. 
            Vague language leads to vague results. Clear thinking is the edge that separates 
            those who execute from those who endlessly plan.
          </p>
        </div>

        {/* Arrow List */}
        <ul className="my-8 space-y-4">
          <li className="text-lg text-[#e8e4dc] pl-7 relative">
            <span className="absolute left-0 text-[#666]">→</span>
            vague language is the reason. not bad luck. not timing. your words.
          </li>
          <li className="text-lg text-[#e8e4dc] pl-7 relative">
            <span className="absolute left-0 text-[#666]">→</span>
            working harder is the laziest solution. it means you haven't figured out the right angle yet.
          </li>
          <li className="text-lg text-[#e8e4dc] pl-7 relative">
            <span className="absolute left-0 text-[#666]">→</span>
            alignment isn't spiritual. it's just what happens when you stop lying to yourself about what you want.
          </li>
        </ul>

        {/* Newsletter Box */}
        <div className="bg-[#0f0f0f] border border-[#222] rounded-lg p-10 text-center">
          <span className="inline-block px-3 py-1 bg-[#1a1a1a] rounded-full text-xs text-[#888] mb-5">Free Newsletter</span>
          <h3 className="text-2xl text-[#e8e4dc] mb-3 font-medium">Clear thinking for builders</h3>
          <p className="text-[#888] text-[15px] mb-7">
            Join founders and creators who want to think better, write better, and build with intention. 
            No fluff. No hype. Just frameworks that work.
          </p>
          
          <form 
            action="/api/subscribe" 
            method="POST"
            className="flex gap-3 max-w-[480px] mx-auto"
          >
            <input 
              type="email" 
              name="email" 
              placeholder="your@email.com" 
              required
              className="flex-1 px-[18px] py-[14px] bg-[#1a1a1a] border border-[#333] rounded-md text-[#e8e4dc] text-[15px] outline-none focus:border-[#555] placeholder:text-[#666]"
            />
            <button 
              type="submit"
              className="px-7 py-[14px] bg-[#e8e4dc] text-[#0a0a0a] rounded-md text-[15px] font-medium hover:opacity-90 transition-opacity"
            >
              Join Free
            </button>
          </form>
          
          <p className="mt-5 text-[13px] text-[#666]">Weekly frameworks. No fluff.</p>
        </div>

        {/* Services */}
        <div className="mt-[60px] pt-[60px] border-t border-[#1a1a1a]">
          <h3 className="text-sm text-[#666] uppercase tracking-[1px] mb-6">Ways I Can Help</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#111] border border-[#1a1a1a] rounded-md p-5">
              <h4 className="text-[15px] text-[#e8e4dc] mb-1.5 font-medium">Ghostwriting</h4>
              <p className="text-[13px] text-[#666]">Your ideas, my words. Consistent content that sounds like you.</p>
            </div>
            <div className="bg-[#111] border border-[#1a1a1a] rounded-md p-5">
              <h4 className="text-[15px] text-[#e8e4dc] mb-1.5 font-medium">Content Strategy</h4>
              <p className="text-[13px] text-[#666]">Clear positioning. Better articulation. Systems that scale.</p>
            </div>
            <div className="bg-[#111] border border-[#1a1a1a] rounded-md p-5">
              <h4 className="text-[15px] text-[#e8e4dc] mb-1.5 font-medium">1:1 Consulting</h4>
              <p className="text-[13px] text-[#666]">Fix your thinking. Fix your words. Fix your outcomes.</p>
            </div>
            <div className="bg-[#111] border border-[#1a1a1a] rounded-md p-5">
              <h4 className="text-[15px] text-[#e8e4dc] mb-1.5 font-medium">Growth Systems</h4>
              <p className="text-[13px] text-[#666]">Automated engagement, reply frameworks, content calendars.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center pt-10 border-t border-[#1a1a1a]">
          <a 
            href="https://x.com/hulmeheights" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#888] text-sm hover:text-[#e8e4dc] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Follow @hulmeheights
          </a>
          <p className="mt-6 text-xs text-[#444]">© 2026 hulmeheights. All rights reserved.</p>
        </footer>

      </div>
    </main>
  );
}
