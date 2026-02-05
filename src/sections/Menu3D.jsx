import { forwardRef } from 'react';
import InfiniteMenu3D from '../components/InfiniteMenu3D';

const Menu3D = forwardRef(function Menu3D(
  { items, onActiveItemChange },
  ref,
) {
  return (
    <section
      id="menu"
      className="h-full bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950"
    >
      <div className="h-full pt-24 sm:pt-28 flex flex-col">
        <div className="flex-1 min-h-0">
          <InfiniteMenu3D
            ref={ref}
            items={items}
            scale={1}
            onActiveItemChange={onActiveItemChange}
            showOverlay={false}
          />
        </div>
      </div>
    </section>
  );
});

export default Menu3D;
