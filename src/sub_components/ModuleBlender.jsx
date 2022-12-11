import styled from "styled-components";
import { GlassEffect } from "../styles/Utilities";

const Blender = styled.div`
  position: relative;
  width: 100%;

  .blender-inner {
    position: absolute;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: 1;
    height: 50px;
    ${GlassEffect}
  }
`;

export default function ModuleBlender() {
  return (
    <Blender>
      <div className="blender-inner"></div>
    </Blender>
  );
}
