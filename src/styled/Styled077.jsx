import styled, { css } from "styled-components";

const tone = 77;
const surface = css`
  border-color: hsl(${tone * 3} 48% 42%);
  background: linear-gradient(90deg, rgba(15, 23, 42, 0.94), rgba(31, 41, 55, 0.88));
`;

const Panel = styled.article`
  ${surface}
  border-style: solid;
  border-width: 1px;
  display: grid;
  gap: 6px;
  min-height: 64px;
  padding: 12px;
`;

const Label = styled.strong`
  color: hsl(${tone * 5} 70% 76%);
  font-size: 12px;
`;

export default function Styled077({ routeName, seed }) {
  return (
    <Panel data-styled="077">
      <Label>Styled 077</Label>
      <span>{routeName}</span>
      <span>{seed + 77}</span>
    </Panel>
  );
}
