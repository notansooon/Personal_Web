import React from 'react';
import data from '../image.json'

function Projects() {

  const projectImage = data.pageImage.find(item => item.name === 'Projects')
  return (


    <>
    <img className='w-full h-[500px] relative object-cover' src ={projectImage.image} />
    <div className="container mx-[auto] px-[300px] pt-[50px]">
      
      <section className="mb-8 text-white">
        <h2 className="text-6xl mb-2">Algorithmic Trading</h2>
        
       
        <div className='text-2.5xl '>
        <p className="mt-10 mb-4">
          Within the dataism research lab, we've established a dedicated team focused on the development and refinement of sophisticated algorithmic trading strategies. Our approach revolves around leveraging advanced statistical inference models to uncover meaningful patterns and insights within financial data. These models serve as the cornerstone of our methodology, enabling us to extract actionable signals from the vast amount of information available in the markets.
        </p>
        <p className="mb-4">
          The process begins with thorough data collection and preprocessing, ensuring the integrity and quality of the datasets we work with. Our team then employs a range of statistical techniques, including regression analysis, time series analysis, machine learning algorithms, and Bayesian inference, among others, to identify underlying relationships and trends in the data.
        </p>
        <p className="mb-4">
          Once potential trading signals are identified, rigorous testing and validation procedures are conducted to assess their robustness and efficacy across various market conditions. This iterative process allows us to refine and optimize our strategies continuously, adapting to evolving market dynamics and minimizing risks.
        </p>
        </div>
      </section>

      <section className="mb-8 text-white"> 
        <div className='text-2.5xl'>
        <h2 className="text-6xl mt-[70px] mb-2">Skill Vs Luck Replication Study</h2>
        <p className="italic mb-6 mt-6">Alex Jaimes, Ryan Bradley, Ben Cummings</p>
        <p className="mb-4">
          The Dataism Lab is currently exploring the possibility of replicating a seminal study published in 2005 by Cuthbertson, Nitzsche, and O’Sullivan. This study delves into the intriguing question of whether the performance of individual UK mutual funds can be attributed to skill or luck. Using statistical bootstrapping techniques, the authors found that while most funds' performance could be chalked up to luck, there existed a small subset with "bad skill" and an even smaller subset with "good skill". The paper shed light on the disproportionate impact of extreme funds on overall performance analysis.
        </p>
        <p className="mb-4">
          The original study analyzed a dataset comprising 935 UK mutual funds spanning the period from 1975 to 2002. This dataset included both surviving and non-surviving funds, with survival not necessarily indicative of performance but possibly related to mergers or closures. The authors obtained monthly fund return data from Fenchurch Corporate Services, utilizing S&P Analytical Software Data. Key market factors such as the FT All Share Index and the one-month UK T-bill rate were employed to calculate excess returns.
        </p>
        <p className="mb-4">
          The replication study will involve employing various types of models, similar to those used in the original research. These models include unconditional models where factor loadings remain time-invariant, conditional-beta models allowing for changes in factor loadings with conditioning public information, conditional alpha-beta models incorporating time-varying alphas based on conditioning information, and market timing models to identify potential market forecasting abilities of fund managers.
        </p>
        <p className="mb-4">
          Although the precise workings of conditional and market timing models require further review, the Dataism Lab is committed to comprehensively understanding and applying these methodologies to replicate the original study's findings. Through rigorous analysis and interpretation of the updated dataset, the lab aims to contribute valuable insights to the ongoing discourse surrounding the role of skill and luck in mutual fund performance evaluation.
        </p>
        </div>
      </section>
    </div>
    </>
  );
}

export default Projects;
