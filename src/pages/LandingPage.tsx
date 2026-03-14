function LandingPage() {
	return (
		<main className="relative grid min-h-screen place-items-center overflow-hidden bg-[linear-gradient(160deg,#08111f_0%,#10213b_45%,#f0b14d_160%)] px-8 py-12">
			<div className="absolute left-[-4rem] top-[10%] size-72 rounded-full bg-amber-300/50 blur-xl" />
			<div className="absolute bottom-[8%] right-[-3rem] size-72 rounded-full bg-emerald-300/35 blur-xl" />

			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,186,73,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(74,222,128,0.14),transparent_28%)]" />

			<section className="relative z-10 w-full max-w-[720px] rounded-[2rem] border border-white/12 bg-slate-950/70 px-8 py-14 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-[18px]">
				<img className="size-8 mx-auto mb-7" src="/icons/logo.svg" />
				<p className="mb-1 text-sm font-bold uppercase tracking-[0.18em] text-white/70">
					Creator Keys Marketplace
				</p>
				<h1 className="font-grotesque text-[clamp(3.5rem,12vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.06em] text-[#fff7e8]">
					Access Layer
				</h1>
			</section>
		</main>
	);
}

export default LandingPage;
