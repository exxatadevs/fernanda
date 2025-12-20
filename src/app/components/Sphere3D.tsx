import { motion, useScroll, useTransform } from 'motion/react';

export function Sphere3D() {
  const { scrollYProgress } = useScroll();
  
  // Transforma o progresso do scroll em rotação
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
      <div className="relative w-[600px] h-[600px]" style={{ perspective: '1200px' }}>
        <motion.div
          className="absolute inset-0"
          style={{
            rotateX,
            rotateY,
            rotateZ,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Faces do losango (cubo rotacionado 45 graus) */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateZ(45deg)' }}>
            {/* Face frontal */}
            <div 
              className="absolute w-[400px] h-[400px] border border-[#AEAEB7]/50"
              style={{ 
                transform: 'translateZ(200px)',
                background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                opacity: 0.6
              }}
            />
            {/* Face traseira */}
            <div 
              className="absolute w-[400px] h-[400px] border border-[#AEAEB7]/50"
              style={{ 
                transform: 'translateZ(-200px) rotateY(180deg)',
                background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                opacity: 0.6
              }}
            />
            {/* Face direita */}
            <div 
              className="absolute w-[400px] h-[400px] border border-[#AEAEB7]/50"
              style={{ 
                transform: 'rotateY(90deg) translateZ(200px)',
                background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                opacity: 0.6
              }}
            />
            {/* Face esquerda */}
            <div 
              className="absolute w-[400px] h-[400px] border border-[#AEAEB7]/50"
              style={{ 
                transform: 'rotateY(-90deg) translateZ(200px)',
                background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                opacity: 0.6
              }}
            />
            {/* Face superior */}
            <div 
              className="absolute w-[400px] h-[400px] border border-[#AEAEB7]/50"
              style={{ 
                transform: 'rotateX(90deg) translateZ(200px)',
                background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                opacity: 0.6
              }}
            />
            {/* Face inferior */}
            <div 
              className="absolute w-[400px] h-[400px] border border-[#AEAEB7]/50"
              style={{ 
                transform: 'rotateX(-90deg) translateZ(200px)',
                background: 'linear-gradient(135deg, #AEAEB7 0%, #C5C5CC 100%)',
                opacity: 0.6
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
