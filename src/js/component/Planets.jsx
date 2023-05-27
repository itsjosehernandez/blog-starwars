import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import planetimage from "../../img/planet.png";

const Planets = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <h1 className="ms-5 header">Planets</h1>
      <div className=" m-5 ms-5 mb-3 scroll">
        <div className="d-inline-flex">
          {store.swapiPlanets.map((planet) => {
            return (
              <div className="col-2 m-3 Card" key={planet.result._id}>
                <div className="card h-100 ">
                  <img
                    src={planetimage}
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">
                      {planet.result.properties.name}
                    </h5>
                    <p className="card-text">
                      Population: {planet.result.properties.population}
                      <br />
                      Gravity: {planet.result.properties.gravity}
                      <br />
                      Climate: {planet.result.properties.climate}
                    </p>
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() =>
                          navigate(`/planetDetails/${planet.result.uid}`)
                        }
                      >
                        Learn more!
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() => {
                          actions.addFavorites(planet);
                        }}
                      >
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Planets;
