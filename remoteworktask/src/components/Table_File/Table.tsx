import React, { FunctionComponent, useState } from "react";
import styles from "../../mainfile/main.module.css";

interface TableProps {
  data: boolean;
}

const Table: FunctionComponent<TableProps> = ({ data }) => {
  return (
    <>
      <div className={styles.frameParent13}>
        <div className={styles.frameParent14}>
          <div className={styles.frame2}>
            <div className={styles.content6}>
              <img
                className={styles.maskedIcon1}
                alt=""
                src="/masked-icon1.svg"
              />
              <img className={styles.menufilledIcon} alt="" src="/icon11.svg" />
              <div className={styles.button8}>比較</div>
            </div>
          </div>
          <div className={styles.frameParent15}>
            <div className={styles.frameParent16}>
              <div className={styles.frameParent17}>
                <div className={styles.frameParent18}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-366@2x.png"
                  />
                  <div className={styles.div10}>主なユーザー属性</div>
                  <div className={styles.frameParent19}>
                    <div className={styles.frameParent20}>
                      <div className={styles.rectangleWrapper}>
                        <div className={styles.frameItem} />
                      </div>
                      <div className={styles.frame3}>
                        <div className={styles.content}>
                          <div className={styles.frameInner} />
                          <div className={styles.description}>男性 : 00%</div>
                        </div>
                        <div className={styles.content}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.description}>女性 : 00%</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.frameParent22}>
                        <section>
                          <div className={styles.frameChild1} />
                        </section>
                        <div className={styles.frameChild2} />
                      </div>
                      <div className={styles.frameParent23}>
                        <div className={styles.rectangleContainer}>
                          <div className={styles.frameChild3} />
                          <div className={styles.description}>
                            30代 男性 : 00%
                          </div>
                        </div>
                        <div className={styles.rectangleContainer}>
                          <div className={styles.frameChild4} />
                          <div className={styles.description}>
                            20代 男性 : 00%
                          </div>
                        </div>
                        <div className={styles.rectangleContainer}>
                          <div className={styles.frameChild5} />
                          <div className={styles.description}>
                            30代 女性 : 00%
                          </div>
                        </div>
                        <div className={styles.rectangleParent3}>
                          <div className={styles.frameChild6} />
                          <div className={styles.description}>その他 : 00%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent24}>
                  <div className={styles.choiceChipbActiveParent}>
                    <div className={styles.choiceChipbActive}>
                      <div className={styles.avatar}>
                        <img
                          className={styles.maskedicon}
                          alt=""
                          src="/avatar9.svg"
                        />
                      </div>
                      <div className={styles.label8}>
                        <div className={styles.label20}>ライフスタイル</div>
                      </div>
                      <div className={styles.icon18}>
                        <img
                          className={styles.icon19}
                          alt=""
                          src="/-icon1.svg"
                        />
                      </div>
                    </div>
                    <b className={styles.title}>MediaTitleMediaTitle</b>
                  </div>
                  <div className={styles.frameParent25}>
                    <div className={styles.frameParent26}>
                      <div className={styles.parent1}>
                        <div className={styles.div11}>メディア概要</div>
                        <div className={styles.descriptionWrapper}>
                          <div className={styles.description6}>
                            概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト
                          </div>
                        </div>
                      </div>
                      <div className={styles.top3Group}>
                        <div className={styles.div11}>対応ファネル</div>
                        <div className={styles.chips1InputbTextOnlyAContainer}>
                          <button className={styles.chips1InputbTextOnlyA9}>
                            <div className={styles.avatar}>
                              <img
                                className={styles.maskedicon}
                                alt=""
                                src="/avatar10.svg"
                              />
                            </div>
                            <label className={styles.label}>
                              <div className={styles.label22}>認知</div>
                            </label>
                            <div className={styles.icon18}>
                              <img
                                className={styles.icon19}
                                alt=""
                                src="/-icon.svg"
                              />
                            </div>
                          </button>
                          <button className={styles.chips1InputbTextOnlyA10}>
                            <div className={styles.avatar}>
                              <img
                                className={styles.maskedicon}
                                alt=""
                                src="/avatar11.svg"
                              />
                            </div>
                            <label className={styles.label}>
                              <div className={styles.label24}>興味</div>
                            </label>
                            <div className={styles.icon18}>
                              <img
                                className={styles.icon19}
                                alt=""
                                src="/-icon.svg"
                              />
                            </div>
                          </button>
                          <button className={styles.chips1InputbTextOnlyA10}>
                            <div className={styles.avatar}>
                              <img
                                className={styles.maskedicon}
                                alt=""
                                src="/avatar12.svg"
                              />
                            </div>
                            <div className={styles.label8}>
                              <div className={styles.label24}>理解</div>
                            </div>
                            <div className={styles.icon18}>
                              <img
                                className={styles.icon19}
                                alt=""
                                src="/-icon.svg"
                              />
                            </div>
                          </button>
                          <button className={styles.chips1InputbTextOnlyA9}>
                            <div className={styles.avatar}>
                              <img
                                className={styles.maskedicon}
                                alt=""
                                src="/avatar13.svg"
                              />
                            </div>
                            <div className={styles.label8}>
                              <div className={styles.label22}>
                                購買 / 来店促進
                              </div>
                            </div>
                            <div className={styles.icon18}>
                              <img
                                className={styles.icon19}
                                alt=""
                                src="/-icon.svg"
                              />
                            </div>
                          </button>
                          <button className={styles.chips1InputbTextOnlyA10}>
                            <div className={styles.avatar}>
                              <img
                                className={styles.maskedicon}
                                alt=""
                                src="/avatar14.svg"
                              />
                            </div>
                            <div className={styles.label8}>
                              <div className={styles.label24}>リピート</div>
                            </div>
                            <div className={styles.icon18}>
                              <img
                                className={styles.icon19}
                                alt=""
                                src="/-icon.svg"
                              />
                            </div>
                          </button>
                          <button className={styles.chips1InputbTextOnlyA10}>
                            <div className={styles.avatar}>
                              <img
                                className={styles.maskedicon}
                                alt=""
                                src="/avatar15.svg"
                              />
                            </div>
                            <label className={styles.label}>
                              <div className={styles.label24}>推奨</div>
                            </label>
                            <div className={styles.icon18}>
                              <img
                                className={styles.icon19}
                                alt=""
                                src="/-icon.svg"
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className={styles.top3Parent}>
                        <div className={styles.div11}>
                          広告主の業種/商材Top3
                        </div>
                        <div className={styles.descriptionWrapper}>
                          <div className={styles.description7}>
                            <p className={styles.p}>1.食品・飲料 00%</p>
                            <p className={styles.p}>
                              2.家庭用品・トイレタリー 00%
                            </p>
                            <p className={styles.p}>3.化粧品 00%</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.parent1}>
                        <div className={styles.div11}>メディア種別</div>
                        <div className={styles.descriptionFrame}>
                          <div className={styles.description8}>
                            {" "}
                            ポータルメディア
                          </div>
                        </div>
                      </div>
                      <div className={styles.top3Group}>
                        <div className={styles.div14}>
                          閲覧/視聴/読者ターゲット
                        </div>
                        <div className={styles.descriptionFrame}>
                          <div className={styles.description8}>
                            女性 , 社会人
                          </div>
                        </div>
                      </div>
                    </div>
                    {data === true ? (
                      <div className={styles.frameParent27}>
                        <div className={styles.localOfferParent}>
                          <img
                            className={styles.localOfferIcon}
                            alt=""
                            src="/local-offer.svg"
                          />
                          <div className={styles.div15}>
                            シーズン限定メニュー
                          </div>
                        </div>
                        <div className={styles.descriptionWrapper2}>
                          <div className={styles.description10}>
                            直前割引情報があります！
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              {data === true ? (
                <div className={styles.imageParent}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.frame4}>
                    <div className={styles.div16}>公開日 : 2022/12/20</div>
                    <b className={styles.title1}>
                      記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル
                    </b>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.unstyledbuttonParent}>
              <button className={styles.unstyledbutton8}>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon12.svg"
                />
                <div className={styles.button5}>お気に入り</div>
                <div className={styles.unstyledbuttonChild} />
                <div className={styles.button5}>10</div>
              </button>
              <button className={styles.buttonoutlined8}>
                <div className={styles.unstyledbutton5}>
                  <div className={styles.button6}>お問い合わせ</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
