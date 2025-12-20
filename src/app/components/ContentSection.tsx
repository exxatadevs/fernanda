import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ContentSectionProps {
  children: ReactNode;
  delay?: number;
  align?: 'left' | 'right' | 'center';
}

export function ContentSection({ children, delay = 0, align = 'left' }: ContentSectionProps) {
  const alignmentClasses = {
    left: 'items-start text-left',
    right: 'items-end text-right',
    center: 'items-center text-center',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className={`flex flex-col ${alignmentClasses[align]} z-10 relative`}
    >
      {children}
    </motion.div>
  );
}

interface TextBoxProps {
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'minimal';
  className?: string;
}

export function TextBox({ children, variant = 'default', className = '' }: TextBoxProps) {
  const variantClasses = {
    default: 'bg-black/60 backdrop-blur-sm border border-white/10 p-8',
    outlined: 'bg-black/40 md:bg-transparent backdrop-blur-sm border border-white/20 p-8',
    minimal: 'bg-black/40 md:bg-transparent backdrop-blur-sm p-8',
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
