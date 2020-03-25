import React from "react";
import { Breadcrumb } from "antd";
export default () => (
  <div>
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Numerical method</Breadcrumb.Item>
    </Breadcrumb>
    <div className="has-text-centered">
      <section class="hero is-info">
        <div className="container">
          <h1 className="title">Numerical method</h1>
        </div>
      </section>
    </div>
    <section class="hero is-info">
      <div className="container">
        <h2 className="title" style={{ color: "black" }}>
          Root of Equation{" "}
        </h2>
        <h2 className="page-title" style={{ color: "pink" }}>
          - Bisection Method{" "}
        </h2>
        <h2 className="page-title" style={{ color: "green" }}>
          - False-Position Method{" "}
        </h2>
        <h2 className="page-title" style={{ color: "White" }}>
          - Newton Raphson Method{" "}
        </h2>
        <h2 className="page-title" style={{ color: "Yellow" }}>
          - OnePoint Iteration Method{" "}
        </h2>
        <h2 className="page-title" style={{ color: "Purple" }}>
          - Secant Method{" "}
        </h2>
      </div>
    </section>
  </div>
);
