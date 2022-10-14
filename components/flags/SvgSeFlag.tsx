export const SvgSeFlag = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='512'
      height='512'
      viewBox='0 0 512 512'
      className="w-8 h-8 us:w-7 us:h-7"
    >
      <mask id='a'>
        <circle cx='256' cy='256' r='256' fill='#fff' />
      </mask>
      <g mask='url(#a)'>
        <path
          fill='#0052b4'
          d='M0 0h133.6l35.3 16.7L200.3 0H512v222.6l-22.6 31.7 22.6 35.1V512H200.3l-32-19.8-34.7 19.8H0V289.4l22.1-33.3L0 222.6z'
        />
        <path
          fill='#ffda44'
          d='M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0z'
        />
      </g>
    </svg>
  )
}