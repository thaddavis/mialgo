import { Button, Table } from "react-bootstrap";
import { CardGrid } from "./components/Card.styled";
import { Opportunities } from "./opportunitiesData";

export function HiringTable() {
  return (
    <CardGrid>
      <div className="container">
        <div className="card__wrap--outer">
          {Opportunities.map((i, idx) => {
            return (
              <div key={i.name} className="card__wrap--inner">
                <div className="card">
                  <img alt="opportunity" src={i.image} />
                  <div className="card__item">
                    <h2>{i.name}</h2>
                  </div>
                  {/* <div className="card__sub">
                    <small>Paris</small>
                  </div> */}
                  <div className="card__item  flexible">
                    <small>{i.description}</small>
                  </div>
                  {/* <div className="card__item">
                    <small>Reading Time: 2min</small>
                  </div> */}
                  <div className="card__footer">
                    <a
                      rel="noreferrer"
                      className="pull"
                      href={i.link}
                      target="_blank"
                    >
                      <small>Learn more</small>
                    </a>
                    {/* <a className="push" href="#">
                      <small>Share</small>
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CardGrid>
  );
}
