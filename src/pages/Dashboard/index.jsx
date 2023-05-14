/* eslint-disable jsx-a11y/anchor-is-valid */
//* Packages import */
import React from "react";

//* Components import */
import { Img, Line, List, Text } from "components";
import DashboardColumnOne from "components/DashboardColumnOne";
import DashboardNavigation from "components/DashboardNavigation";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-montserrat items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1340px] mx-auto md:px-5 w-full">
          <DashboardNavigation
            className="flex flex-col md:hidden bg-black  rounded-xl	mr-10 justify-start w-[280px]"
            board="Board."
            dashboard="Dashboard"
            transactions="Transactions"
            schedules="Schedules"
            users="Users"
            settingsOne="Settings"
            help="Help"
            contactus="Contact Us"
          />
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Text
                className="text-black_900 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Dashboard
              </Text>
              <div
                className="bg-cover bg-no-repeat bg-white rounded-l flex md:flex-1 flex-col font-lato h-[30px] items-center justify-start md:ml-[0] ml-[575px] p-1.5 w-[18%] md:w-full"
               
              >
                <div className="flex flex-row items-center justify-between w-[90%] md:w-full">
                  <Text
                    className="font-normal not-italic text-gray_400 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Search...
                  </Text>
                  <Img
                    src="images/img_search.svg"
                    className="h-3 w-3"
                    alt="search_One"
                  />
                </div>
              </div>
              <Img
                src="images/img_notification.svg"
                className="h-5 md:ml-[0] ml-[30px] w-auto"
                alt="notification"
              />
              <DashboardColumnOne className="flex sm:flex-1 flex-col h-[30px] items-center justify-start md:ml-[0] ml-[29px] w-[30px] sm:w-full" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[39px] w-full">
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[120px] bg-[#dceee0] rounded-xl justify-end p-[18px] w-[23%] md:w-full"
                
              >
                <Img
                  src="images/img_camera.svg"
                  className="h-6 md:ml-[0] ml-[150px] mr-[7px] w-auto"
                  alt="camera"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start ml-1.5 md:ml-[0] mr-[53px] w-auto md:w-full">
                  <Text
                    className="font-lato font-normal not-italic text-black_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Total Revenues
                  </Text>
                  <Text
                    className="font-opensans text-black_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    $2,129,430
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat bg-[#f4ecdd] rounded-xl flex md:flex-1 flex-col h-[120px] justify-end p-[17px] w-[23%] md:w-full"
              
              >
                <Img
                  src="images/img_offer_black_900.svg"
                  className="h-6 md:ml-[0] ml-[157px] mr-[7px] mt-0.5 w-auto"
                  alt="offer_One"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[7px] mr-[68px] w-auto md:w-full">
                  <Text
                    className="font-lato font-normal not-italic text-black_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Total Transactions
                  </Text>
                  <Text
                    className="font-opensans text-black_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    1,520
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 rounded-xl bg-[#eedad9] flex-col h-[120px] justify-end p-[17px] w-[23%] md:w-full"
                
              >
                <Img
                  src="images/img_vector.svg"
                  className="h-6 md:ml-[0] ml-[154px] mr-[7px] mt-0.5 w-[23px]"
                  alt="vector"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[7px] mr-[113px] w-auto md:w-full">
                  <Text
                    className="font-lato font-normal not-italic text-black_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Total Likes
                  </Text>
                  <Text
                    className="font-opensans text-black_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    9,721
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat rounded-xl bg-[#dde0ef] flex md:flex-1 flex-col h-[120px] justify-end p-[19px] w-[23%] md:w-full"
                
              >
                <Img
                  src="images/img_user.svg"
                  className="h-6 md:ml-[0] ml-[139px] mr-1.5 w-auto"
                  alt="user"
                />
                <div className="flex flex-col gap-[5px] items-start justify-start ml-1.5 md:ml-[0] mr-[108px] w-auto md:w-full">
                  <Text
                    className="font-lato font-normal not-italic text-black_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Total Users
                  </Text>
                  <Text
                    className="font-opensans text-black_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    892
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-white rounded-xl flex flex-col font-lato mt-10 p-6 sm:px-5 relative w-full"
          
            >
              <div className="flex flex-col items-center justify-start m-auto w-[93%]">
                <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[98%] md:w-full">
                    <div className="flex flex-col font-montserrat gap-[7px] items-start justify-start w-[14%] md:w-full">
                      <Text
                        className="font-bold text-black_900 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Activities
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-between w-full">
                        <Text
                          className="font-normal not-italic text-gray_600 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          May - June 2021
                        </Text>
                        <Img
                          src="images/img_vector_gray_600.svg"
                          className="h-[5px] w-auto"
                          alt="vector_One"
                        />
                      </div>
                    </div>
                    <Text
                      className="font-lato font-normal md:ml-[0] ml-[644px] md:mt-0 mt-5 not-italic text-black_900 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Guest
                    </Text>
                    <Text
                      className="font-lato font-normal md:ml-[0] ml-[60px] md:mt-0 mt-5 not-italic text-black_900 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      User
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                      <Text
                        className="font-normal not-italic text-gray_600 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        500
                      </Text>
                      <Line className="bg-gray_200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                    </div>
                    <div className="h-[142px] md:h-[147px] sm:h-[234px] mt-[13px] relative w-full">
                      <div className="absolute flex flex-col gap-[22px] h-max inset-[0] items-center justify-center m-auto w-full">
                        <div className="sm:h-40 h-[102px] md:h-[95px] relative w-full">
                          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                                <Text
                                  className="font-normal not-italic text-gray_600 text-left w-auto"
                                  as="h6"
                                  variant="h6"
                                >
                                  400
                                </Text>
                                <Line className="bg-gray_200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between mt-[22px] w-full">
                                <Text
                                  className="font-normal not-italic text-gray_600 text-left w-auto"
                                  as="h6"
                                  variant="h6"
                                >
                                  300
                                </Text>
                                <Line className="bg-gray_200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between mt-[21px] w-full">
                                <Text
                                  className="font-normal not-italic text-gray_600 text-left w-auto"
                                  as="h6"
                                  variant="h6"
                                >
                                  200
                                </Text>
                                <Line className="bg-gray_200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_linechart2.svg"
                            className="absolute h-[95px] right-[0] top-[0] w-auto"
                            alt="linechartTwo"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                          <Text
                            className="font-normal not-italic text-gray_600 text-left w-auto"
                            as="h6"
                            variant="h6"
                          >
                            100
                          </Text>
                          <Line className="bg-gray_200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                        </div>
                      </div>
                      <Img
                        src="images/img_linechart1.svg"
                        className="absolute h-[132px] inset-x-[0] mx-auto top-[0] w-auto"
                        alt="linechartOne"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between mt-[22px] w-[99%] md:w-full">
                      <Text
                        className="font-normal not-italic text-gray_600 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        0
                      </Text>
                      <Line className="bg-gray_200 h-px mb-1.5 md:mt-0 mt-[9px] w-[98%]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[87px] items-center justify-center ml-auto mr-20 mt-[-NaNpx] w-[11%] z-[1]">
                <div className="bg-red_200 h-2.5 rounded-[50%] w-2.5"></div>
                <div className="bg-light_green_300 h-2.5 rounded-[50%] w-2.5"></div>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between mt-[-2.75px] mx-auto w-[65%] z-[1]">
                <Text
                  className="font-lato font-normal not-italic text-gray_600 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Week 1
                </Text>
                <Text
                  className="font-normal font-opensans not-italic text-gray_600 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Week 2
                </Text>
                <Text
                  className="font-normal font-opensans not-italic text-gray_600 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Week 3
                </Text>
                <Text
                  className="font-normal font-opensans not-italic text-gray_600 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Week 4
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-center justify-between mt-10 w-full">
              <div
                className="bg-cover bg-no-repeat bg-white rounded-xl flex md:flex-1 flex-col h-64 items-center justify-start p-[31px] sm:px-5 w-[48%] md:w-full"
            
              >
                <div className="flex flex-col gap-[18px] items-center justify-start w-[95%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-bold text-black_900 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Top products
                    </Text>
                    <div className="flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[162px] w-auto sm:w-full">
                      <Text
                        className="not-italic text-gray_600 text-left w-auto"
                        variant="body1"
                      >
                        May - June 2021
                      </Text>
                    </div>
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="h-[5px] ml-2 sm:ml-[0] sm:mt-0 mt-[5px] w-auto"
                      alt="vector_Two"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                    <Img
                      src="images/img_piechart.svg"
                      className="h-[134px] w-[134px]"
                      alt="piechart"
                    />
                    <div className="flex flex-col gap-5 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-[59%] md:w-full">
                        <div className="flex flex-col justify-start w-full">
                          <div className="flex flex-row font-montserrat gap-2.5 items-center justify-start w-full">
                            <div className="bg-green_200 h-[11px] my-[3px] rounded-[5px] w-[11px]"></div>
                            <Text
                              className="font-bold text-black_900 text-left w-auto"
                              as="h6"
                              variant="h6"
                            >
                              Basic Tees
                            </Text>
                          </div>
                          <Text
                            className="font-lato md:ml-[0] ml-[21px] mt-1 not-italic text-gray_600 text-left w-auto"
                            variant="body1"
                          >
                            55%
                          </Text>
                        </div>
                      </div>
                      <List
                        className="flex-col gap-5 grid items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row font-montserrat gap-2.5 items-start justify-start w-full">
                              <div className="bg-amber_200_01 h-[11px] my-[3px] rounded-[5px] w-[11px]"></div>
                              <Text
                                className="font-bold text-black_900 text-left w-auto"
                                as="h6"
                                variant="h6"
                              >
                                Custom Short Pants
                              </Text>
                            </div>
                            <Text
                              className="font-lato md:ml-[0] ml-[21px] mt-1 not-italic text-gray_600 text-left w-auto"
                              variant="body1"
                            >
                              31%
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[77%] md:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row font-montserrat gap-2.5 items-start justify-start w-full">
                              <div className="bg-red_A100 h-[11px] my-[3px] rounded-[5px] w-[11px]"></div>
                              <Text
                                className="font-bold text-black_900 text-left w-auto"
                                as="h6"
                                variant="h6"
                              >
                                Super Hoodies
                              </Text>
                            </div>
                            <Text
                              className="font-lato md:ml-[0] ml-[21px] mt-[3px] not-italic text-gray_600 text-left w-auto"
                              variant="body1"
                            >
                              14%
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat bg-white rounded-xl flex md:flex-1 flex-col h-64 items-center justify-start p-[30px] sm:px-5 w-[48%] md:w-full"
              >
                <div className="flex flex-col items-start justify-start mb-1 w-[98%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-bold text-black_900 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Today’s schedule
                    </Text>
                    <a
                      href="javascript:"
                      className="font-normal sm:ml-[0] ml-[196px] sm:mt-0 mt-[3px] not-italic text-gray_600 text-left text-xs w-auto"
                    >
                      <Text className="">See All</Text>
                    </a>
                    <Img
                      src="images/img_vector_gray_600_8x5.svg"
                      className="h-2 sm:ml-[0] ml-[7px] sm:mt-0 mt-1.5 w-auto"
                      alt="vector_Three"
                    />
                  </div>
                  <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-[62%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                      <Line className="bg-light_green_300 h-[66px] w-[5px]" />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-bold text-gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Meeting with suppliers from Kuta Bali
                        </Text>
                        <Text
                          className="mt-[3px] not-italic text-gray_500 text-left w-auto"
                          variant="body1"
                        >
                          14.00-15.00
                        </Text>
                        <Text
                          className="mt-1 not-italic text-gray_500 text-left w-auto"
                          variant="body1"
                        >
                          at Sunset Road, Kuta, Bali{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-lato items-center justify-start mt-[13px] w-[56%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                      <Line className="bg-indigo_400 h-[66px] w-[5px]" />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-bold text-gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Check operation at Giga Factory 1
                        </Text>
                        <Text
                          className="mt-[3px] not-italic text-gray_500 text-left w-auto"
                          variant="body1"
                        >
                          18.00-20.00
                        </Text>
                        <Text
                          className="mt-[3px] not-italic text-gray_500 text-left w-auto"
                          variant="body1"
                        >
                          at Central Jakarta{" "}
                        </Text>
                      </div>
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

export default DashboardPage;
