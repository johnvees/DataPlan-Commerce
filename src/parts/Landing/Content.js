import React, { useState } from 'react';
import ILBanner from '../../assets/images/landingBanner.png';

export default function Content() {
  const [activeColumn, setActiveColumn] = useState(0);

  const dummyDataPlan = [
    {
      planSize: 50,
      planCategory: 'Data',
      planUnit: 'GB',
      primary: { name: '4G Plan', amount: 24, expDate: '2024-01-30' },
      secondary: { name: 'Night Plan', amount: 26, expDate: '2024-01-29' },
    },
    {
      planSize: 50,
      planCategory: 'Voice Call',
      planUnit: 'mins',
      primary: { name: 'All Operator', amount: 28, expDate: '2024-01-29' },
      secondary: {
        name: 'Same Operator',
        amount: 22,
        expDate: '2024-01-30',
      },
    },
    {
      planSize: 100,
      planCategory: 'Messages',
      planUnit: 'SMS',
      primary: { name: 'All Operator', amount: 48, expDate: '2024-01-29' },
      secondary: {
        name: 'Same Operator',
        amount: 52,
        expDate: '2024-01-30',
      },
    },
  ];

  function formatDate(inputDate) {
    const [year, month, day] = inputDate.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

  const calculateTotalAmount = (index) => {
    const primaryAmount = dummyDataPlan[index].primary.amount || 0;
    const secondaryAmount = dummyDataPlan[index].secondary.amount || 0;
    return primaryAmount + secondaryAmount;
  };

  const handleColumnClick = (index) => {
    setActiveColumn(index);
  };

  return (
    <section>
      <div className="row justify-content-center container-plan">
        <div className="col-lg-3 col-md-12 col-sm-12 container-credit">
          <h3 className="disabled mt-3 mb-5">Your Remaining Credit</h3>
          <div className="row mb-5 m-0">
            <h3 className="light">Rp</h3>
            <h1 className="light">300.000</h1>
          </div>
          <a href="/packages" style={{ width: '100%' }}>
            <button
              className="btn btn-secondary mb-3"
              style={{ width: '100%' }}
            >
              Add Credit
            </button>
          </a>
        </div>

        <div className="col-lg-9 col-md-12 col-sm-12">
          <div className="row">
            {dummyDataPlan.map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-4 col-sm-4 pt-3 pb-3 container-plan-category ${
                  activeColumn === index ? 'active' : ''
                }`}
                onClick={() => handleColumnClick(index)}
              >
                <h2 className="light">{`${calculateTotalAmount(index)} ${
                  item.planUnit
                }`}</h2>
                <h3 className="light">{item.planCategory}</h3>
              </div>
            ))}
          </div>

          <div className="row container-plan-detail" style={{ height: '60%' }}>
            {activeColumn === 0 && (
              <>
                <div className="col-lg-5 col-md-5 col-sm-5">
                  <h2 className="dark">{dummyDataPlan[0].secondary.name}</h2>
                  <h2 className="primary">{`${dummyDataPlan[0].secondary.amount} ${dummyDataPlan[0].planUnit}`}</h2>
                  <h4 className="dark">
                    Expires {formatDate(dummyDataPlan[0].secondary.expDate)}
                  </h4>
                </div>

                <div className="col-lg-5 col-md-5 col-sm-5">
                  <h2 className="dark">{dummyDataPlan[0].primary.name}</h2>
                  <h2 className="primary">{`${dummyDataPlan[0].primary.amount} ${dummyDataPlan[0].planUnit}`}</h2>
                  <h4 className="dark">
                    Expires {formatDate(dummyDataPlan[0].primary.expDate)}
                  </h4>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2">
                  <a href="/packages" style={{ width: '100%' }}>
                    <button
                      className="btn btn-primary outlined mb-3"
                      style={{ width: '100%' }}
                    >
                      Buy Package
                    </button>
                  </a>
                </div>
              </>
            )}
            {activeColumn === 1 && (
              <>
                <div className="col-lg-5 col-md-5 col-sm-5">
                  <h2 className="dark">{dummyDataPlan[1].secondary.name}</h2>
                  <h2 className="primary">{`${dummyDataPlan[1].secondary.amount} ${dummyDataPlan[1].planUnit}`}</h2>
                  <h4 className="dark">
                    Expires {formatDate(dummyDataPlan[1].secondary.expDate)}
                  </h4>
                </div>

                <div className="col-lg-5 col-md-5 col-sm-5">
                  <h2 className="dark">{dummyDataPlan[1].primary.name}</h2>
                  <h2 className="primary">{`${dummyDataPlan[1].primary.amount} ${dummyDataPlan[1].planUnit}`}</h2>
                  <h4 className="dark">
                    Expires {formatDate(dummyDataPlan[1].primary.expDate)}
                  </h4>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2">
                  <a href="/packages" style={{ width: '100%' }}>
                    <button
                      className="btn btn-primary outlined mb-3"
                      style={{ width: '100%' }}
                    >
                      Buy Package
                    </button>
                  </a>
                </div>
              </>
            )}
            {activeColumn === 2 && (
              <>
                <div className="col-lg-5 col-md-5 col-sm-5">
                  <h2 className="dark">{dummyDataPlan[2].secondary.name}</h2>
                  <h2 className="primary">{`${dummyDataPlan[2].secondary.amount} ${dummyDataPlan[2].planUnit}`}</h2>
                  <h4 className="dark">
                    Expires {formatDate(dummyDataPlan[2].secondary.expDate)}
                  </h4>
                </div>

                <div className="col-lg-5 col-md-5 col-sm-5">
                  <h2 className="dark">{dummyDataPlan[2].primary.name}</h2>
                  <h2 className="primary">{`${dummyDataPlan[2].primary.amount} ${dummyDataPlan[2].planUnit}`}</h2>
                  <h4 className="dark">
                    Expires {formatDate(dummyDataPlan[2].primary.expDate)}
                  </h4>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2">
                  <a href="/packages" style={{ width: '100%' }}>
                    <button
                      className="btn btn-primary outlined mb-3"
                      style={{ width: '100%' }}
                    >
                      Buy Package
                    </button>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container-landing-content">
        <div className="row align-items-center m-0">
          <div className="col-lg-7 col-md-6 col-sm-12 pl-0 ">
            <h1 className="primary mb-3">
              One Product, for Various Package Options
            </h1>
            <h2 className="dark mb-5">
              Offering customizable package options for a digital lifestyle that
              is easy, flexible, and without limitations.
            </h2>
            <div className="row">
              <div className="col-lg-5 col-md-8 col-sm-12">
                <a href="/packages">
                  <button
                    className="btn btn-primary mb-3"
                    style={{ width: '100%' }}
                  >
                    View Packages
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 p-0">
            <img src={ILBanner} alt="" style={{ width: '100%' }} />
          </div>
        </div>

        {/* <div className="container-find-package">
          <h2 className="primary mb-5">Find The Package You Want!</h2>

          <div className="row align-items-center justify-content-center">
            <div className="col-3">
              <img src={ILBanner} alt="" />
              <h2 className="dark">Bundling</h2>
            </div>
            <div className="col-lg-3">Night</div>
            <div className="col-lg-3">Voice Call</div>
            <div className="col-lg-3">Message</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
