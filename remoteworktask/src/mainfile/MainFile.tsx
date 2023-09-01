import React from "react";
import SideBar from "../components/Side_Bar/SideBar";
import Hader from "../components/Hader_File/Hader";
import Form from "../components/Form_File/Form";
import Table from "../components/Table_File/Table";
import styles from "./main.module.css";
const MainFile = () => {
  const data1 = true;
  const data2 = false;
  return (
    <>
      <div className={styles.k10}>
        <SideBar />
        <div className={styles.headingParent}>
          <Hader />
          <div className={styles.frameParent2}>
            <Form />
            <Table data={data1} />
            <Table data={data2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFile;
