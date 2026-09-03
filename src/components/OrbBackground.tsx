import { motion } from 'framer-motion';

const orbs = [
  { size: 520, color: 'rgba(0, 229, 163, 0.16)', startX: '8%', startY: '12%', driftX: 60, driftY: 80, duration: 22 },
  { size: 440, color: 'rgba(33, 152, 243, 0.13)', startX: '72%', startY: '8%', driftX: -70, driftY: 60, duration: 26 },
  { size: 380, color: 'rgba(192, 132, 252, 0.12)', startX: '55%', startY: '68%', driftX: 50, driftY: -50, duration: 24 },
  { size: 300, color: 'rgba(255, 138, 101, 0.10)', startX: '15%', startY: '75%', driftX: -40, driftY: -60, duration: 28 },
  { size: 260, color: 'rgba(251, 191, 36, 0.08)', startX: '40%', startY: '40%', driftX: 80, driftY: -30, duration: 30 },
];

export default function OrbBackground() {
  return (
    <div className="orb-bg" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="orb"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            left: orb.startX,
            top: orb.startY,
          }}
          animate={{
            x: [0, orb.driftX, orb.driftX * 0.4, -orb.driftX * 0.6, 0],
            y: [0, orb.driftY * 0.5, -orb.driftY * 0.7, orb.driftY * 0.3, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
