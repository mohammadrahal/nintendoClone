import '../Style/Product.css'

const Product= () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full gap-4">
        <div className='cart'>
          <p>ESRB rating</p>
          <div></div>
        </div>
        <div className='cart'>
          <p>Supported play modes</p>
          <div className="flex items-center justify-between gap-3">
            <div className="">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              role="presentation"
              alt=""
              data-testid="TvModeIcon"
              size="48"
              color="currentColor"
              className='sicon'
            >
              <g fill="currentColor">
                <path d="M11.903 16.114l-1.154-3.56H9.591l1.641 4.627h1.357l1.632-4.627h-1.163zm-7.604-2.58h1.36v3.646h1.058v-3.646h1.371v-.981H4.299zm17.743 9.126v.758H32v-6.702h-9.958z"></path>
                <path d="M8.433 21.6H4.784v1.808h3.649v.01h1.656v-.01h3.645V21.6H10.09v-.737h8.443V8.582H0v12.281h8.433v.737zM2.11 18.956v-8.453h14.31v8.453H2.11z"></path>
                <path d="M16.333 21.6h-.603v1.801h5.589v-.602h-4.986z"></path>
              </g>
            </svg>
            <p>TV</p>
            </div>
            <div>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                role="presentation"
                alt=""
                data-testid="TabletopModeIcon"
                size="48"
                color="currentColor"
                className='sicon'
              >
                <path
                  d="M31.32 18.242l-2.657-6.94-1.285 6.94h3.943zM28.174 5.336H6.418l-2.74 12.906h21.754l2.741-12.906zm-5.035 10.505H6.99l1.722-8.094h16.143l-1.717 8.094zm-21.741 5.03H0v.995h.02a.098.098 0 0 0-.02.059v2.008a2.734 2.734 0 0 0 2.736 2.731h7.426a2.737 2.737 0 0 0 2.741-2.731v-2.008a.18.18 0 0 0-.01-.06h.01v-.994H1.397zm7.64.31a1 1 0 1 1-1.004 1.002c0-.554.45-1.002 1.004-1.001zm-5.845 4.43a1.837 1.837 0 1 1 1.858-1.833c-.003.49-.2.958-.55 1.302a1.839 1.839 0 0 1-1.308.53zm3.24-1.833a1.009 1.009 0 0 1 1.004-.985.981.981 0 1 1-1.004.985zm2.605 2.57a.983.983 0 1 1 .99-.978.988.988 0 0 1-.99.977zm1.591-1.591a.982.982 0 1 1 0-1.964.982.982 0 1 1 0 1.964zM32 20.87H19.097v.995h.02a.098.098 0 0 0-.02.059v2.008a2.73 2.73 0 0 0 2.731 2.731h7.431A2.738 2.738 0 0 0 32 23.933v-2.009a.18.18 0 0 0-.01-.06H32v-.994zm-3.866.31a1 1 0 0 1-.006 1.999.999.999 0 1 1 .006-1.998zm-5.85 4.43a1.836 1.836 0 0 1 0-3.673 1.837 1.837 0 1 1 0 3.672zm3.24-1.833c.015-.545.459-.98 1.004-.985a.981.981 0 1 1 0 1.964c-.544 0-.99-.434-1.004-.979zm2.61 2.57a.983.983 0 1 1 .99-.978.988.988 0 0 1-.99.977zm1.586-1.591a.982.982 0 1 1 0-1.964.982.982 0 1 1 0 1.964z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <p>TableTop</p>
            </div>
            <div className=''>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                role="presentation"
                alt=""
                data-testid="HandheldModeIcon"
                size="48"
                color="currentColor"
                className='sicon'
              >
                <path
                  d="M28.812 8.455h-2.353c-.014 0-.038.009-.052.009v-.01H5.621v.014c-.028-.004-.061-.013-.07-.013H3.192A3.196 3.196 0 0 0 0 11.65v8.696a3.203 3.203 0 0 0 3.193 3.198H5.55c.01 0 .043-.01.07-.015v.015h20.787v-.015a.163.163 0 0 0 .052.015h2.353A3.195 3.195 0 0 0 32 20.346V11.65a3.187 3.187 0 0 0-3.188-3.196zm-.183 1.973a1.014 1.014 0 1 1-1.012 1.012 1.006 1.006 0 0 1 1.012-1.012zm.994 4.276a1.003 1.003 0 1 1-2.005-.021 1.003 1.003 0 0 1 2.005.021zM3.521 10.428a1.89 1.89 0 1 1-.703 3.639 1.892 1.892 0 0 1-1.168-1.755c0-1.035.835-1.877 1.87-1.884zm1.007 6.22a1.001 1.001 0 0 1-1.509.882 1.007 1.007 0 0 1-.497-.882 1.024 1.024 0 0 1 .999-1.026 1.03 1.03 0 0 1 1.007 1.026zM.896 18.29a1.003 1.003 0 1 1 2.006.018 1.003 1.003 0 0 1-2.006-.018zm2.625 2.636a1.012 1.012 0 0 1-.725-1.727 1.013 1.013 0 0 1 1.732.713 1.008 1.008 0 0 1-1.007 1.014zm1.636-1.623a1.02 1.02 0 1 1-.004-2.04 1.02 1.02 0 0 1 .004 2.04zm20.092 1.42H6.774v-9.45H25.25v9.45zm.722-7.66a1.021 1.021 0 1 1 2.043.009 1.021 1.021 0 0 1-2.043-.009zm2.658 7.863a1.892 1.892 0 1 1 1.866-1.88 1.88 1.88 0 0 1-1.866 1.88zm1.622-6.836a1.019 1.019 0 0 1-.748-1.726 1.018 1.018 0 1 1 .748 1.726z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>handheld</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid gird-cals-1 gap-0'>
<div className='prod-container'>
  <h2>Release date</h2>
  <p>October 5, 2017</p>
</div>
<div className='prod-container'>
  <h2>Release date</h2>
  <p>October 5, 2017</p>
</div>
<div className='prod-container'>
  <h2>Release date</h2>
  <p>October 5, 2017</p>
</div>
      </div>
    </div>
  );
};

export default Product;
