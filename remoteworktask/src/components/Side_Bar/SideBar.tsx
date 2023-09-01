import React from "react";
import styles from "../../mainfile/main.module.css";

const SideBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.iconbutton}>
          <div className={styles.unstylediconbutton}>
            <img
              className={styles.menufilledIcon}
              alt=""
              src="/menufilled.svg"
            />
          </div>
        </div>
        <div className={styles.image1Wrapper}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon.svg"
                  />
                  <div className={styles.div}>ホーム</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </div>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon2.svg"
                  />
                  <div className={styles.div}>登録情報</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </nav>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon3.svg"
                  />
                  <div className={styles.div}>与件一覧</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </nav>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon4.svg"
                  />
                  <div className={styles.div}>担当者一覧</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </nav>
              <nav className={styles.navigationItem3}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon5.svg"
                  />
                  <div className={styles.div}>商談管理</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </nav>
              <div className={styles.navigationItem4}>
                <div className={styles.rectangle} />
                <img className={styles.icon10} alt="" src="/icon1.svg" />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <b className={styles.b}>メディア一覧</b>
                <img className={styles.vectorIcon} alt="" src="/icon6.svg" />
              </div>
              <nav className={styles.navigationItem3}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon7.svg"
                  />
                  <div className={styles.div}>お気に入りメディア</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </nav>
              <div className={styles.navigationItem6}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon8.svg"
                  />
                  <div className={styles.div}>お知らせ</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </div>
            </div>
            <div className={styles.navigationItem7}>
              <img className={styles.menufilledIcon} alt="" src="/icon9.svg" />
              <div className={styles.div7}>ログアウト</div>
              <img className={styles.icon17} alt="" src="/icon1.svg" />
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.description}>広告主</div>
            <div className={styles.frameParent1}>
              <div className={styles.groupWrapper}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.image1Icon1}
                    alt=""
                    src="/image-11@2x.png"
                  />
                </div>
              </div>
              <div className={styles.koukokunushi}>株式会社KOUKOKUNUSHI</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
