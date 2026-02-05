import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import InfiniteMenu3D from '../components/InfiniteMenu3D';

const Menu3D = forwardRef(function Menu3D(
  { items, onActiveItemChange, onSelect },
  ref,
) {
  return (
    <section
      id="menu"
      className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Interactive <span className="gradient-text">Menu</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Use the top bar to jump between items, then click the arrow to scroll to that section.
          </p>
        </motion.div>

        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
          <div className="h-[420px] sm:h-[520px]">
            <InfiniteMenu3D
              ref={ref}
              items={items}
              scale={1}
              onActiveItemChange={onActiveItemChange}
              onSelect={onSelect}
            />
          </div>

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(47,120,255,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.12),transparent_45%)]" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Menu3D;
