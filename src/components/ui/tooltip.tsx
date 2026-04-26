import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TooltipProps {
	content: string;
	children: React.ReactNode;
	openDelay?: number;
	closeDelay?: number;
}

export function Tooltip({
	content,
	children,
	openDelay = 300,
	closeDelay = 150,
}: TooltipProps) {
	const [isVisible, setIsVisible] = React.useState(false);
	const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

	const showTooltip = React.useCallback(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			setIsVisible(true);
		}, openDelay);
	}, [openDelay]);

	const hideTooltip = React.useCallback(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			setIsVisible(false);
		}, closeDelay);
	}, [closeDelay]);

	React.useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	return (
		<div
			className="relative inline-flex"
			onMouseEnter={showTooltip}
			onMouseLeave={hideTooltip}
			onFocus={showTooltip}
			onBlur={hideTooltip}
		>
			{children}

			<AnimatePresence>
				{isVisible && (
					<motion.div
						role="tooltip"
						initial={{ opacity: 0, y: 4, x: '-50%', scale: 0.95 }}
						animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
						exit={{ opacity: 0, y: 2, x: '-50%', scale: 0.98 }}
						transition={{ duration: 0.15, ease: 'easeOut' }}
						className={cn(
							'pointer-events-none absolute bottom-full left-1/2 z-50 mb-2',
							'whitespace-nowrap rounded-md bg-slate-950 px-2 py-1',
							'text-xs font-medium text-white shadow-xl ring-1 ring-white/10'
						)}
					>
						{content}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}