import React from 'react';
import { useEffect, useRef } from 'react';
import IconButton from "../utils/IconButton";
import {FaLinkedin, FaWhatsapp, FaWeibo, FaFacebook, FaEnvelope} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

function Projects() {
  const widgetContainerRef = useRef(null);
   



  return (
    <>


      <div className="relative min-h-screen text-white font-serif overflow-hidden">
        {/* Gemini Effect Background */}



        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 pt-60 space-y-16">
          <section className="bg-opacity-50 bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-5xl lg:text-5xl mb-6">Algorithmic Trading</h2>
            <div className="text-lg md:text-xl lg:text-xl space-y-4">
              <p>
                Within the dataism research lab, we've established a dedicated team focused on the development and
                refinement of sophisticated algorithmic trading strategies. Our approach revolves around leveraging
                advanced statistical inference models to uncover meaningful patterns and insights within financial data.
                These models serve as the cornerstone of our methodology, enabling us to extract actionable signals from
                the vast amount of information available in the markets.
              </p>
              <p>
                The process begins with thorough data collection and preprocessing, ensuring the integrity and quality
                of the datasets we work with. Our team then employs a range of statistical techniques, including
                regression analysis, time series analysis, machine learning algorithms, and Bayesian inference, among
                others, to identify underlying relationships and trends in the data.
              </p>
              <p>
                Once potential trading signals are identified, rigorous testing and validation procedures are conducted
                to assess their robustness and efficacy across various market conditions. This iterative process allows
                us to refine and optimize our strategies continuously, adapting to evolving market dynamics and
                minimizing risks.
              </p>
            </div>
          </section>

          <section className="bg-opacity-50 bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-5xl lg:text-5xl">Skill Vs Luck Replication Study</h2>
            <p className="italic mb-6 text-lg md:text-xl lg:text-xl">Alex Jaimes, Ryan Bradley, Ben Cummings</p>
            <div className="text-lg md:text-xl lg:text-xl space-y-4">
              <p>
                The Dataism Lab is currently exploring the possibility of replicating a seminal study published in 2005
                by Cuthbertson, Nitzsche, and O’Sullivan. This study delves into the intriguing question of whether the
                performance of individual UK mutual funds can be attributed to skill or luck. Using statistical
                bootstrapping techniques, the authors found that while most funds' performance could be chalked up to
                luck, there existed a small subset with "bad skill" and an even smaller subset with "good skill". The
                paper shed light on the disproportionate impact of extreme funds on overall performance analysis.
              </p>
              <p>
                The original study analyzed a dataset comprising 935 UK mutual funds spanning the period from 1975 to
                2002. This dataset included both surviving and non-surviving funds, with survival not necessarily
                indicative of performance but possibly related to mergers or closures. The authors obtained monthly fund
                return data from Fenchurch Corporate Services, utilizing S&P Analytical Software Data. Key market
                factors such as the FT All Share Index and the one-month UK T-bill rate were employed to calculate
                excess returns.
              </p>
              <p>
                The replication study will involve employing various types of models, similar to those used in the
                original research. These models include unconditional models where factor loadings remain
                time-invariant, conditional-beta models allowing for changes in factor loadings with conditioning public
                information, conditional alpha-beta models incorporating time-varying alphas based on conditioning
                information, and market timing models to identify potential market forecasting abilities of fund
                managers.
              </p>
              <p>
                Although the precise workings of conditional and market timing models require further review, the
                Dataism Lab is committed to comprehensively understanding and applying these methodologies to replicate
                the original study's findings. Through rigorous analysis and interpretation of the updated dataset, the
                lab aims to contribute valuable insights to the ongoing discourse surrounding the role of skill and luck
                in mutual fund performance evaluation.
              </p>
            </div>
          </section>
        </div>
        <div className= "flex h-screen items-center justify-center font-sans font-semibold gap-4">
          <IconButton color="bg-blue-500" text="LinkedIn">
            <FaLinkedin size= {30}></FaLinkedin>
          </IconButton>

          <IconButton color="bg-blue-500" text="Facebook">
            <FaFacebook size= {30}></FaFacebook>
          </IconButton>

          <IconButton color="bg-green-500" text="Whatsapp">
            <FaWhatsapp size= {30}></FaWhatsapp>
          </IconButton>

          <IconButton color="bg-red-500" text="Weibo">
            <FaWeibo size= {30}></FaWeibo>
          </IconButton>

          <IconButton color="Black" text="Twitter">
            <FaXTwitter size= {30}></FaXTwitter>
          </IconButton>

          <IconButton color="bg-red-500" text="Mail">
            <FaEnvelope size= {30}></FaEnvelope>
          </IconButton>

        </div>
      </div>
    </>
  );
}

export default Projects;



