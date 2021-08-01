import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Project Detail</h1>
      <p>{params.projectId}</p>
    </section>
  );
};

export default ProjectDetail;
