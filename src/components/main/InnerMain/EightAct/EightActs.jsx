import React from "react";
import styles from "./EightActs.module.css";

const EightActs = () => {
  const data = [
    {
      number: 1,
      title: "Sound the Alarm",
      desc: "Acknowledge and raise awareness of the climate and ecological crisis – including its roots in systems of oppression – in our organisations and our practice."
    },
    {
      number: 2,
      title: "Start the Journey",
      desc: "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start."
    },
    {
      number: 3,
      title: "Bring Clients with Us",
      desc: "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress."
    },
    {
      number: 4,
      title: "Measure What We Make",
      desc: "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out."
    },
    {
      number: 5,
      title: "Redefine ‘Good’",
      desc: "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards."
    },
    {
      number: 6,
      title: "Educate, Accelerate",
      desc: "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry."
    },
    {
      number: 7,
      title: "Design for Justice",
      desc: "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world."
    },
    {
      number: 8,
      title: "Amplify Voices for Change",
      desc: "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change."
    },
  ];

  return (
    <section className={styles.eightSection}>
      <div className={styles.container}>
        <div className={styles.grid}>

          <div className={styles.leftCol}>
            <div className={styles.stickyHeading}>
              <h2 className={styles.heading}>8 Acts of Emergency</h2>
            </div>
          </div>

          <div className={styles.rightCol}>
            <h2 className={styles.mainHeading}>
            What does it take to Declare? It’s accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:
            </h2>
            <div className={styles.actsList}>
              {data.map(({ number, title, desc }) => (
                <div key={number} className={styles.act}>
                  <div className={styles.actHeader}>
                    <div className={styles.actNumber}>{number}</div>
                    <div className={styles.actTitle}>{title}</div>
                  </div>
                  <div className={styles.actDesc}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EightActs;
