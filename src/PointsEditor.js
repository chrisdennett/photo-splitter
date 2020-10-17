import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

export const PointsEditor = ({ points, setPoints, w, h }) => {
  const onDrag = (newX, newY, index) => {
    const newPoints = [...points];
    newPoints[index] = { x: newX / w, y: newY / h };
    setPoints(newPoints);
  };

  return (
    <Container>
      <DragPoint pt={points[0]} onChange={onDrag} w={w} h={h} index={0} />
      <DragPoint pt={points[1]} onChange={onDrag} w={w} h={h} index={1} />
      <DragPoint pt={points[2]} onChange={onDrag} w={w} h={h} index={2} />
      <DragPoint pt={points[3]} onChange={onDrag} w={w} h={h} index={3} />
    </Container>
  );
};

const DragPoint = ({ pt, onChange, w, h, index }) => (
  <Draggable
    handle=".handle2"
    defaultPosition={{ x: pt.x * w, y: pt.y * h }}
    position={{ x: pt.x * w, y: pt.y * h }}
    onStart={(e, data) => onChange(data.x, data.y, index)}
    onDrag={(e, data) => onChange(data.x, data.y, index)}
    onStop={(e, data) => onChange(data.x, data.y, index)}
  >
    <Handle className="handle2" />
  </Draggable>
);

const Container = styled.div``;

const Handle = styled.div`
  background-color: red;
  width: 30px;
  height: 30px;
  border-radius: 0px;
  position: absolute;
  z-index: 3;
`;
