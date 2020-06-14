import React, { useState, useEffect } from "react";
import getPersons from "../api/persons";
import { IPerson } from "../models/Person";
import petConstants from "../utils/constants";

const Pets = (props: any) => {
  const gender: any = {
    male: "Male",
    female: "Female",
  };

  let [loading, setLoading] = useState(false);
  let [pets, setPets] = useState({
    male: [],
    female: [],
  });
  const splitByCategory = (person: IPerson[]) => {
    let malePets: any = [];
    let femalePets: any = [];
    person.forEach((item) => {
      if (item.gender === gender.male && item.pets) {
        malePets = [...malePets, ...item.pets];
      }
      if (item.gender === gender.female && item.pets) {
        femalePets = [...femalePets, ...item.pets];
      }
    });
    setPets({
      male: malePets,
      female: femalePets,
    });
  };
  const sortPets = (pets: any) => {
    return [].concat(pets).sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
  };
  useEffect(() => {
    getPersons().then((res) => {
      splitByCategory(res);
    });
  }, []);
  return (
    <>
      <div className="d-flex p2 justify-content-center">
        <div style={{ width: "80%" }}>
          <div className="card" style={{ padding: "20px" }}>
            <div className="card-body">
              {loading && (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              <h3>Pets By Gender</h3>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card" style={{ padding: "20px" }}>
                    <div className="card-body">
                      <h4>Male {props.category}</h4>
                      <ul className="list-group list-group-flush">
                        {sortPets(pets.male).map((item: any, index: number) => {
                          console.log(item);
                          console.log(props.category);
                          if (item.type === props.category) {
                            return (
                              <li className="list-group-item" key={index}>
                                {item.name}
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card" style={{ padding: "20px" }}>
                    <div className="card-body">
                      <h4>Female {props.category}</h4>
                      <ul className="list-group list-group-flush">
                        {sortPets(pets.female).map(
                          (item: any, index: number) => {
                            if (item.type === props.category) {
                              return (
                                <li className="list-group-item" key={index}>
                                  {item.name}
                                </li>
                              );
                            }
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pets;
