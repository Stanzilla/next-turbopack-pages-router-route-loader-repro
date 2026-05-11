import { useMemo } from 'react';
import { icons } from './assets/index.js';
import { DynamicWidgets } from './dynamic/index.js';
import { PackageWidgets } from './packageWidgets.js';
import { getRoutePayload } from './routePayload.js';
import { StyledWidgets } from './styled/index.js';
import Widget01 from './widgets/Widget01.jsx';
import Widget02 from './widgets/Widget02.jsx';
import Widget03 from './widgets/Widget03.jsx';
import Widget04 from './widgets/Widget04.jsx';
import Widget05 from './widgets/Widget05.jsx';
import Widget06 from './widgets/Widget06.jsx';
import Widget07 from './widgets/Widget07.jsx';
import Widget08 from './widgets/Widget08.jsx';
import Widget09 from './widgets/Widget09.jsx';
import Widget10 from './widgets/Widget10.jsx';
import Widget11 from './widgets/Widget11.jsx';
import Widget12 from './widgets/Widget12.jsx';
import Widget13 from './widgets/Widget13.jsx';
import Widget14 from './widgets/Widget14.jsx';
import Widget15 from './widgets/Widget15.jsx';
import Widget16 from './widgets/Widget16.jsx';
import Widget17 from './widgets/Widget17.jsx';
import Widget18 from './widgets/Widget18.jsx';
import Widget19 from './widgets/Widget19.jsx';
import Widget20 from './widgets/Widget20.jsx';
import Widget21 from './widgets/Widget21.jsx';
import Widget22 from './widgets/Widget22.jsx';
import Widget23 from './widgets/Widget23.jsx';
import Widget24 from './widgets/Widget24.jsx';
import Widget25 from './widgets/Widget25.jsx';
import Widget26 from './widgets/Widget26.jsx';
import Widget27 from './widgets/Widget27.jsx';
import Widget28 from './widgets/Widget28.jsx';

const Widgets = [
  Widget01,
  Widget02,
  Widget03,
  Widget04,
  Widget05,
  Widget06,
  Widget07,
  Widget08,
  Widget09,
  Widget10,
  Widget11,
  Widget12,
  Widget13,
  Widget14,
  Widget15,
  Widget16,
  Widget17,
  Widget18,
  Widget19,
  Widget20,
  Widget21,
  Widget22,
  Widget23,
  Widget24,
  Widget25,
  Widget26,
  Widget27,
  Widget28
];

export function makePage(title, routeName) {
  return function ReproPage({ payload }) {
    const checksum = useMemo(
      () => payload.items.reduce((total, item) => total + item.value, 0),
      [payload.items]
    );

    return (
      <section className="pageSurface">
        <h1>{title}</h1>
        <p data-testid="route-name">{routeName}</p>
        <p>Payload checksum: {checksum}</p>
        <div className="icons">
          {icons.map((icon, index) => (
            <img key={icon} src={icon} alt="" width="24" height="24" data-index={index} />
          ))}
        </div>
        <div className="grid">
          {Widgets.map((Widget, index) => (
            <Widget key={index} routeName={routeName} seed={payload.items[index]?.value ?? index} />
          ))}
          {PackageWidgets.map((PackageWidget, index) => (
            <PackageWidget
              key={`package-${index}`}
              routeName={routeName}
              seed={payload.items[index]?.value ?? index}
            />
          ))}
          {DynamicWidgets.map((DynamicWidget, index) => (
            <DynamicWidget
              key={`dynamic-${index}`}
              routeName={routeName}
              seed={payload.items[index]?.value ?? index}
            />
          ))}
          {StyledWidgets.map((StyledWidget, index) => (
            <StyledWidget
              key={`styled-${index}`}
              routeName={routeName}
              seed={payload.items[index]?.value ?? index}
            />
          ))}
        </div>
      </section>
    );
  };
}

export async function makeServerSideProps(routeName) {
  return {
    props: {
      payload: getRoutePayload(routeName)
    }
  };
}
