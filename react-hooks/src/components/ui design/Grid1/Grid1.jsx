import React from "react";

const Grid1 = () => {
  return (
    <>
      <section className="container mx-auto my-16 border rounded">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-2">
            <div>
              <h1>Customizable</h1>
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <div>
                <h1>Secure by default</h1>
                <p>
                  Provident fugit and vero voluptate. magnam magni doloribus
                  dolores voluptates a sapiente nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <div>
                <h1>Faster than light</h1>
                <p>
                  Provident fugit vero voluptate. magnam magni doloribus dolores
                  voluptates inventore nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div>
              <div>
                <h1>Faster than light</h1> 
                <p>
                  Provident fugit vero voluptate. Voluptates a sapiente
                  inventore nisi.
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-span-3">
            <div>
              <div>
                <h1>Keep your loved ones safe</h1>
                <p>
                  Voluptate. magnam magni doloribus dolores voluptates a
                  sapiente inventore nisi.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Grid1;
