import React, { useState, useEffect } from 'react';
import currency from 'currency.js';
import icBundling from '../../assets/images/icBundling.svg';
import icCall from '../../assets/images/icCall.svg';
import icMessage from '../../assets/images/icMessage.svg';
import icNight from '../../assets/images/icNight.svg';

export default function Content() {
  const [selectedPackages, setSelectedPackages] = useState([]);

  const dummyDataPackage = [
    {
      name: 'Bundling',
      package: [
        {
          name: 'Bundling 10 GB + 100 Minutes Call + 100 SMS',
          image: icBundling,
          price: 100000,
          credit: 0,
          gPlan: 10,
          nightPlan: 0,
          call: 0,
          callAll: 100,
          sms: 0,
          smsAll: 100,
        },
      ],
    },
    {
      name: 'Credit',
      package: [
        {
          name: 'Rp 100.000 Credit',
          image: icBundling,
          price: 99500,
          credit: 100000,
          gPlan: 0,
          nightPlan: 0,
          call: 0,
          callAll: 0,
          sms: 0,
          smsAll: 0,
        },
      ],
    },
    {
      name: '4G Plan',
      package: [
        {
          name: '10 GB 4G Internet',
          image: icBundling,
          price: 50000,
          credit: 0,
          gPlan: 10,
          nightPlan: 0,
          call: 0,
          callAll: 0,
          sms: 0,
          smsAll: 0,
        },
      ],
    },
    {
      name: 'Night Plan',
      package: [
        {
          name: '10 GB Night Plan',
          image: icNight,
          price: 10000,
          credit: 0,
          gPlan: 10,
          nightPlan: 0,
          call: 0,
          callAll: 0,
          sms: 0,
          smsAll: 0,
        },
      ],
    },
    {
      name: 'Voice Call',
      package: [
        {
          name: '100 Minutes of All Operator Call',
          image: icCall,
          price: 10000,
          credit: 0,
          gPlan: 0,
          nightPlan: 0,
          call: 0,
          callAll: 100,
          sms: 0,
          smsAll: 0,
        },
      ],
    },
    {
      name: 'Message',
      package: [
        {
          name: '100 Messages of All Operator',
          image: icMessage,
          price: 20000,
          credit: 0,
          gPlan: 0,
          nightPlan: 0,
          call: 0,
          callAll: 0,
          sms: 0,
          smsAll: 100,
        },
      ],
    },
  ];

  const desiredKeys = [
    'credit',
    'gPlan',
    'nightPlan',
    'call',
    'callAll',
    'sms',
    'smsAll',
  ];

  const keyDescriptions = {
    credit: 'Credit',
    gPlan: 'GB 4G Internet',
    nightPlan: 'GB Night Plan Internet',
    call: 'Minutes Call',
    callAll: 'Minutes All Operator Call',
    sms: 'SMS',
    smsAll: 'SMS All Operator',
  };

  const [defaultSelectedPackage, setDefaultSelectedPackage] = useState(
    dummyDataPackage[0]
  );

  useEffect(() => {
    setSelectedPackages([defaultSelectedPackage.name]);
  }, [defaultSelectedPackage]);

  const handleCheckboxChange = (packageName) => {
    if (selectedPackages.includes(packageName)) {
      setSelectedPackages(
        selectedPackages.filter((name) => name !== packageName)
      );
    } else {
      setSelectedPackages([...selectedPackages, packageName]);
    }
  };

  return (
    <section>
      <div className="container-package">
        <h1 className="primary text-center mt-5 mb-5">
          Find The Package You Want!
        </h1>
        <div className="row m-0 p-0">
          <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
            <div className="container-package group">
              <h2 className="dark">Package List</h2>

              {dummyDataPackage.map((item, index) => (
                <div
                  className="row m-0 p-0 mb-2 align-items-center"
                  key={index}
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    id={item.name}
                    checked={selectedPackages.includes(item.name)}
                    onChange={() => handleCheckboxChange(item.name)}
                  />
                  <h3 className="dark m-0 ml-2">
                    {item.name} ({item.package.length})
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-9 col-md-8 col-sm-12">
            {selectedPackages.map((selectedPackage) => {
              const packageData = dummyDataPackage.find(
                (item) => item.name === selectedPackage
              );

              return (
                <div
                  className="container-package detail  mb-3"
                  key={selectedPackage}
                >
                  <div className="row m-0 p-0">
                    <div className="col-xl-2 xol-md-2 col-sm-3 mb-2">
                      <img
                        src={packageData.package[0].image}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className="col-xl-8 xol-md-8 col-sm-6 mb-2">
                      <h3 className="dark">{packageData.package[0].name}</h3>
                      <h4 className="dark">You will get:</h4>
                      <ul>
                        {desiredKeys.map(
                          (key) =>
                            packageData.package[0][key] !== 0 && (
                              <li key={key}>
                                {`${packageData.package[0][key]} ${keyDescriptions[key]}`}
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                    <div className="col-xl-2 xol-md-2 col-sm-3">
                      <h3 className="primary">
                        {currency(packageData.package[0].price, {
                          symbol: 'Rp',
                          precision: 0,
                          separator: '.',
                        }).format()}
                      </h3>
                      <a href="/payment">
                        <button
                          className="btn btn-primary"
                          style={{ width: '100%' }}
                        >
                          Buy Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
