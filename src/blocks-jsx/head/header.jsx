function Header() {

  const title = 'Lumora'

  return (
    <div className="header-block">
      <div className="header-container center-row">
        
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_768_9725)">
          <path d="M63.5093 59.2937H4.49072L34 8.98738L63.5093 59.2937ZM5.95878 58.4552H62.0412L34 10.6514L5.95878 58.4552Z" fill="white"/>
          <path d="M64 59.5747H4L34 8.43188L64 59.5747ZM4.49072 59.2937H63.5093L34 8.98738L4.49072 59.2937ZM62.0412 58.4552H5.95878L34 10.6514L62.0412 58.4552ZM6.4495 58.1742H61.5505L34 11.2066L6.4495 58.1742Z" fill="white"/>
          <path d="M4.49072 8.70634L63.5093 8.70634L34 59.0126L4.49072 8.70634ZM62.0412 9.54478L5.95878 9.54477L34 57.3486L62.0412 9.54478Z" fill="white"/>
          <path d="M4 8.42529L64 8.4253L34 59.5681L4 8.42529ZM63.5093 8.70634L4.49072 8.70634L34 59.0126L63.5093 8.70634ZM5.95878 9.54477L62.0412 9.54478L34 57.3486L5.95878 9.54477ZM61.5505 9.82583L6.4495 9.82583L34 56.7934L61.5505 9.82583Z" fill="white"/>
          <path d="M8.70634 63.5093L8.70634 4.49072L59.0126 34L8.70634 63.5093ZM9.54478 5.95878L9.54477 62.0412L57.3486 34L9.54478 5.95878Z" fill="white"/>
          <path d="M8.42529 64L8.42529 4L59.5681 34L8.42529 64ZM8.70634 4.49072L8.70634 63.5093L59.0126 34L8.70634 4.49072ZM9.54477 62.0412L9.54478 5.95878L57.3486 34L9.54477 62.0412ZM9.82583 6.4495L9.82583 61.5505L56.7934 34L9.82583 6.4495Z" fill="white"/>
          <path d="M59.2937 4.49072L59.2937 63.5093L8.98738 34L59.2937 4.49072ZM58.4552 62.0412L58.4552 5.95878L10.6514 34L58.4552 62.0412Z" fill="white"/>
          <path d="M59.5747 4.00001L59.5747 64L8.43188 34L59.5747 4.00001ZM59.2937 63.5093L59.2937 4.49072L8.98738 34L59.2937 63.5093ZM58.4552 5.95878L58.4552 62.0412L10.6514 34L58.4552 5.95878ZM58.1742 61.5505L58.1742 6.44951L11.2066 34L58.1742 61.5505Z" fill="white"/>
          </g>
          <defs>
          <filter id="filter0_d_768_9725" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_768_9725"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_768_9725" result="shape"/>
          </filter>
          </defs>
        </svg>
        <h1>{title}</h1>
      </div>
    </div>
  )
  
}

export default Header
