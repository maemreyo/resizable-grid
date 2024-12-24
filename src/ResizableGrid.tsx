import React, { useState } from 'react';
import { Responsive, Layout } from 'react-grid-layout';
import { ResizableBox } from 'react-resizable';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

interface ResizableGridProps {
  initialLayouts: { [key: string]: Layout[] };
  children: React.ReactNode;
  breakpoints?: { [key: string]: number };
  cols?: { [key: string]: number };
}

const ResizableGrid: React.FC<ResizableGridProps> = ({
  initialLayouts,
  children,
  breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
  cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
}) => {
  const [layouts, setLayouts] = useState<{ [key: string]: Layout[] }>(
    initialLayouts
  );

  const onLayoutChange = (
    layout: Layout[],
    newBreakpoints: { [key: string]: number }
  ) => {
    setLayouts(layout);
  };

  return (
    <Responsive
      className="layout"
      layouts={layouts}
      breakpoints={breakpoints}
      cols={cols}
      rowHeight={100}
      onLayoutChange={onLayoutChange}
      isDraggable={true}
      isResizable={true}
      draggableHandle=".drag-handle"
    >
      {React.Children.map(children, (child, index) => {
        const layout = Object.entries(layouts).map(
          ([breakpoint, layout]) => layout
        );
        const currentLayout = layout[0][index];

        return (
          <div key={currentLayout.i} data-grid={currentLayout}>
            <ResizableBox
              width={currentLayout.w * 100}
              height={currentLayout.h * 100}
              minConstraints={[1 * 100, 1 * 100]}
              maxConstraints={[4 * 100, 4 * 100]} // Adjust as needed
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  border: '1px solid black',
                }}
              >
                <div
                  className="drag-handle"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'gray',
                    cursor: 'grab',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                  }}
                ></div>
                {child}
              </div>
            </ResizableBox>
          </div>
        );
      })}
    </Responsive>
  );
};

export default ResizableGrid;
