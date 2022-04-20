import styled from "styled-components";

export const LandingPageContainer = styled("div")`
  overflow: hidden;
  @media (max-width: 1000px) {
    .hoursTitle {
      width: 100%;
      white-space: pre;
      font-family: sans-serif;
      font-size: 16px;
      color: #000;
    }
    .wrap {
      height: calc(100vh - 100px);
      position: relative;
    }
    .wrap > div {
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      z-index: 1;
    }
    video {
      position: absolute;
      left: 0;
      top: 80px;
      padding: 0;
      width: 100vw;
      height: 500px;
    }
    .topWrap {
      padding-top: 50px;
    }
    #bannerTitle {
      width: 100%;
      text-align: left;
      font-family: sans-serif;
      font-size: 30px;
      font-weight: bold;
      color: #001b39;
    }
    .bannerDesc {
      width: 100%;
      text-align: left;
      font-size: 10px;
      line-height: 20px;
      padding-top: 10px;
    }
    .openBtn {
      display: flex;
      margin: 50px auto 0;
      cursor: pointer;
      justify-content: center;
      align-items: center;
    }
    .btn-link {
      color: #fff;
      text-decoration: none;
    }

    .part2 {
      padding: 60px 0 37px;
    }

    .title {
      width: 100%;
      font-family: sans-serif;
      font-size: 36px;
      color: #000;
      text-align: center;
      line-height: 54px;
    }

    .desc {
      width: 100%;
      margin: 0 auto;
      font-size: 18px;
      color: #000;
      padding-top: 15px;
      text-align: center;
      line-height: 27px;
    }

    .part2Content {
      width: 100%;
    }

    .part2Content > div {
      box-sizing: border-box;
      width: 185px;
      height: 313px;
      padding: 30px 20px 39px;
      margin-right: 3px;
      margin-bottom: 10px;
      background: #ffffff;
      box-shadow: 0 3px 25px #0052af12;
      border-radius: 4px;
    }

    .part2Content > div > div {
      font-family: sans-serif;
      font-size: 28px;
      line-height: 42px;
    }

    .part2Content > div > p {
      padding-top: 10px;
      font-size: 18px;
      line-height: 27px;
      color: #000;
    }

    .part2Content .shares > a {
      color: #007cff;
      cursor: pointer;
    }

    .part2Content img {
      width: 50px;
      height: 50px;
    }

    .feat2 {
      position: relative;
    }

    .feat2 > i {
      font-size: 18px;
      color: #007cff;
      position: relative;
      cursor: pointer;
      line-height: 24px;
      display: inline-block;
      margin-top: 10px;
    }

    .feat2 > i:after {
      content: "";
      top: 2px;
      width: 24px;
      height: 24px;
      position: absolute;
      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY1MzU2MDQ3MzQwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3NjE1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwNC43MzYgNzE3LjA1NmEzMiAzMiAwIDAgMCA0NC44NDI2NjcgMC4zODRsMTgxLjA3NzMzMy0xODAuOTkyYTMyIDMyIDAgMCAwIDAtNDUuMjI2NjY3bC0xODEuMDc3MzMzLTE4MS4wNzczMzNhMzIgMzIgMCAwIDAtNDUuMjI2NjY3IDQ1LjMxMmwxNTguNDIxMzMzIDE1OC4zMzYtMTU4LjQyMTMzMyAxNTguNDIxMzMzYTMyIDMyIDAgMCAwIDAuNDI2NjY3IDQ0Ljh6IiBmaWxsPSIjMDA3Q0ZGIiBwLWlkPSIxNzYxNiI+PC9wYXRoPjwvc3ZnPg==)
        center center no-repeat;
      background-size: 100% 100%;
    }

    .feat2 > a {
      font-size: 18px;
      color: #007cff;
      position: relative;
      cursor: pointer;
      line-height: 24px;
      display: inline-block;
      margin-top: 10px;
    }

    .feat2 > a:after {
      content: "";
      top: 4px;
      width: 18px;
      height: 18px;
      position: absolute;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVFJREFUaEPt2EFKA0EQheG/QbyBguDGC3gGL+EVvIMacQJZiCCuvYKX8AzeQMgBXESSLISW2UlIMrRdr8qBnu1QzfuqelEziZE/aeT5aYDoCbYJtAlUdsDmCt3kEw75pEvryjzF5fWASe6Ae2ABPDFL0+IUFQUWgDlw+itD54mwALwBFxtNdEPUA27zJYnXLbfABVEP6JMHImwAgQg7QBDCFhCAsAc4IzQAR4QO4ITQAhwQeoAY4QMQIvwAIoQvYB/imzMe0kfpZv1fAAsOOP7LB5EvYPfSN2WW+g+j4scPIAjfa30AwnVbDxCG109AHF4LcAivAziF1wAcw9sDnMPbAgLC2wGCwtsAAsNbAd5JnI/31+Ik56jwNhO4y1dkXoAl8Oj5Z9oG0J9ynY9Y88VzWhXvw5UF+mWuMuBQeQMMdUj9vk1A3eGh89sEhjqkfv8D19+OMY99eSEAAAAASUVORK5CYII=)
        center center no-repeat;
      background-size: 100% 100%;
    }

    .feat3 > a {
      font-size: 18px;
      color: #007cff;
      position: relative;
      cursor: pointer;
      line-height: 24px;
      display: inline-block;
      margin-top: 10px;
    }

    .feat3 > a:after {
      content: "";
      top: 2px;
      width: 24px;
      height: 24px;
      position: absolute;
      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY1MzU2MDQ3MzQwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3NjE1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwNC43MzYgNzE3LjA1NmEzMiAzMiAwIDAgMCA0NC44NDI2NjcgMC4zODRsMTgxLjA3NzMzMy0xODAuOTkyYTMyIDMyIDAgMCAwIDAtNDUuMjI2NjY3bC0xODEuMDc3MzMzLTE4MS4wNzczMzNhMzIgMzIgMCAwIDAtNDUuMjI2NjY3IDQ1LjMxMmwxNTguNDIxMzMzIDE1OC4zMzYtMTU4LjQyMTMzMyAxNTguNDIxMzMzYTMyIDMyIDAgMCAwIDAuNDI2NjY3IDQ0Ljh6IiBmaWxsPSIjMDA3Q0ZGIiBwLWlkPSIxNzYxNiI+PC9wYXRoPjwvc3ZnPg==)
        center center no-repeat;
      background-size: 100% 100%;
    }

    .feat3 > .aCrypto {
      color: #fff;
      margin-top: 0;
    }

    .feat3 > .aCrypto:after {
      content: "";
      top: 4px;
      width: 18px;
      height: 18px;
      position: absolute;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUJJREFUaEPt2MFJRDEQxvH/FOGC4MUGrGGbsAXbcPcqbAG2YBPWYAeCBXhQ1NvIAw+yiCFmvhkfJOfk8f1mcpg8Y+XLVp6fCaju4OzA7MBgBUKukLufAs9m9jGYp/v4MMDdd8A18AIczGzfnWLgQATgCTj7lmGXiYgA3APboyKmISIAl8DdD7cgBTEMWIK7exkiBFCJCANUIUIBFYhwQDZCAshEyABZCCkgAyEHqBEpACUiDaBCpAIaiHMze+ydrP8LYHlLbP7yIEoF/DL07c1seRh1rzSAIvyiTQEox205QBle3gF1eCkgI7wMkBVeAsgMHw7IDh8KqAgfBqgKHwKoDB8FeAAu1vxr0avCR3XgCrgF3oCbzD/TIYCvR8oJ8Gpm793z8OAB+TA3mK95fAKaJRJvmB0QF7j5+dmBZonEGz4BCLqtMcMOP9QAAAAASUVORK5CYII=)
        center center no-repeat;
      background-size: 100% 100%;
    }

    .feat4 {
      overflow: hidden;
    }

    .feat4 > i {
      font-size: 18px;
      color: #fff;
      position: relative;
      cursor: pointer;
      line-height: 24px;
    }

    .feat4 > i:after {
      content: "";
      top: 2px;
      width: 24px;
      height: 24px;
      position: absolute;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAARFJREFUWAntljkOwjAQRRFLCNByRQquQk3BAUDs+46As1CQG9CHN5ItWa5o8KSwpa+ZSYr/9K04LpXiignEBAqcQJ7nXfRGfVRTRwUiQ3ataXShABhYGlOX1KpaUpjX0cnA2LKgUYe6WBpTZ9pQKQBXD2rKXNHcPoG6eVBjbagGAHcPalQEqIcHNWQua25fE4CnB9VTAxJjYNro40BlvwD9JUYgUszHqOVATJw+XCswyP/aJjwLfwRgKid3MQ5JA3OmumvOEP43gqkkc3RJ6HV+tBgn6ODBrJjDX0UMzM6D2ajAyHeLsdwU3bVlCJ+MPUQwfzk0e/rEvlOpAHSQ3Knl5qgLo5JANI0JxARiAgES+AJp/cqyTE9CTgAAAABJRU5ErkJggg==)
        center center no-repeat;
      background-size: 100% 100%;
    }

    .feat4.crypto {
      color: #fff !important;
      padding-right: 0 !important;
    }

    .feat4.crypto > p {
      position: relative;
      padding-bottom: 10px;
      color: #fff !important;
    }

    .iraWrap {
      background: #f4fbfd;
      padding: 63px 0 74px;
    }
    .iraWrapContent {
      width: 100%;
      margin: 52px auto 0;
      padding-right: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .iraWrapContent > img {
      width: 346px;
      height: 388px;
      margin-left: 102px;
    }

    .accountright {
      width: 100%;
    }

    .accountWrap > img {
      width: 40px;
      height: 40px;
      margin-right: 15px;
    }

    .accountWrap2 {
      margin-top: 50px;
    }

    .iraTitle {
      font-family: sans-serif;
      font-size: 28px;
      color: #000;
      line-height: 40px;
    }

    .iraDesc {
      font-size: 18px;
      color: #000;
      padding: 10px 0 15px;
      line-height: 27px;
      width: 100%;
    }

    .part3 {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
    }
    .wbus-ssr2271631 {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .wbus-ssr2271631 > div {
      top: 0px;
      bottom: 0px;
      display: block;
      justify-content: center;
      align-item: center;
      opacity: 1;
    }
    .image-content {
      width: 100%;
      opacity: "1";
      margin: 0;
    }
    .image-content-fixed {
      position: relative;
    }
    .display-content {
      width: 100%;
      padding: 10px;
      display: flex;
    }

    .wbus-ssr2271634 {
      display: none;
      width: 100%;
      height: 300px;
      margin: 0;
      overflow-y: hidden;
      margin-left: 10px;
      will-change: opacity, transform;
      flex-direction: column;
      justify-content: center;
      transform-style: preserve-3d;
    }

    .wbus-ssr2271634 > p {
      width: 100%;
      font-size: 36px;
      font-family: sans-serif;
      white-space: pre-line;
    }
    .wbus-ssr2271634 > p:nth-of-type(2) {
      font-size: 18px;
      margin-top: 20px;
      font-family: sans-serif;
      line-height: 28px;
    }
    .scroll {
      display: none;
    }

    .part5 {
      padding: 107px 0 140px;
      background: #f4fbfd;
      position: relative;
    }
    .partContent {
      width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .partContent > img {
        width: 100%;
        padding: 20px;
    }
    .part5Des {
      font-size: 18px;
      width: 100%;
      padding-right: 0px;
      line-height: 28px;
      position: relative;
    }
    .openAccountBtn {
      cursor: pointer;
      width: 204px;
      margin-top: 40px;
      text-align: center;
      padding: 16px 0;
      background: #007cff;
      border-radius: 27px;
      font-family: sans-serif;
      font-size: 16px;
      color: #fff;
      border: none;
    }
    .part5Tips {
      padding-top: 50px;
      font-size: 16px;
      color: #000;
      line-height: 22px;
      opacity: 0.6;
    }

    .part6 {
      background: #0052af;
      text-align: center;
      padding: 67px 0 100px;
    }
    .part6 > div > img {
      margin-top: -68px;
      width: 720px;
      height: 625px;
    }

    .part6 > div > p {
      margin: -150px auto 0;
      padding: 20px;
      width: 100%;
      font-family: OpenSans-Regular, sans-serif !important;
      font-size: 18px;
      color: #fff;
      text-align: center;
      line-height: 28px;
    }

    .part6Tips {
      padding-top: 31px;
      margin: 0 auto;
      text-align: center;
      justify-content: center;
      display: flex;
      font-family: OpenSans-Regular, sans-serif !important;
      font-size: 18px;
      color: #ffffffb3;
    }

    .part6Tips > div {
      position: relative;
      cursor: pointer;
      font-family: OpenSans-Regular, sans-serif !important;
    }
    .part6Tips > div:last-child {
      padding-left: 57px;
    }
  }

  .hoursTitle {
    width: 100%;
    white-space: pre;
    font-family: sans-serif;
    font-size: 26px;
    color: #000;
  }
  .wrap {
    height: calc(100vh - 100px);
    position: relative;
  }
  .wrap > div {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
  }
  video {
    position: absolute;
    left: 0;
    top: 80px;
    padding: 0;
    width: 100%;
    height: 500px;
  }
  .topWrap {
    padding-top: 11%;
  }
  .bannerTitle {
    width: 100%;
    text-align: center;
    font-family: sans-serif;
    font-size: 50px;
    color: #001b39;
  }
  .bannerDesc {
    width: 100%;
    margin: 0 auto;
    font-size: 18px;
    color: #001b39cc;
    line-height: 27px;
    padding-top: 20px;
    white-space: pre-line;
  }
  .openBtn {
    display: flex;
    margin: 110px auto 0;
    cursor: pointer;
    width: 205px;
    height: 50px;
    line-height: 50px;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-size: 18px;
    background: #0052af;
    border-radius: 34.5px;
  }
  .btn-link {
    color: #fff;
    text-decoration: none;
  }

  .part2 {
    padding: 60px 0 37px;
  }

  .title {
    font-family: OpenSans-Bold, sans-serif;
    font-size: 36px;
    color: #000;
    text-align: center;
    line-height: 54px;
  }

  .desc {
    margin: 0 auto;
    font-size: 18px;
    color: #000;
    padding-top: 15px;
    text-align: center;
    line-height: 27px;
  }

  .part2Content {
    width: 100%;
  }

  .part2Content > div {
    box-sizing: border-box;
    width: 285px;
    height: 313px;
    padding: 30px 20px 39px;
    margin-right: 20px;
    background: #ffffff;
    box-shadow: 0 3px 25px #0052af12;
    border-radius: 4px;
  }

  .part2Content > div > div {
    font-family: OpenSans-SemiBold, sans-serif !important;
    font-size: 28px;
    line-height: 42px;
  }

  .part2Content > div > p {
    padding-top: 10px;
    font-size: 18px;
    line-height: 27px;
    color: #000;
  }

  .part2Content .shares > a {
    color: #007cff;
    cursor: pointer;
  }

  .part2Content img {
    width: 50px;
    height: 50px;
  }

  .feat2 {
    position: relative;
  }

  .feat2 > i {
    font-size: 18px;
    color: #007cff;
    position: relative;
    cursor: pointer;
    line-height: 24px;
    display: inline-block;
    margin-top: 10px;
  }

  .feat2 > i:after {
    content: "";
    top: 2px;
    width: 24px;
    height: 24px;
    position: absolute;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY1MzU2MDQ3MzQwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3NjE1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwNC43MzYgNzE3LjA1NmEzMiAzMiAwIDAgMCA0NC44NDI2NjcgMC4zODRsMTgxLjA3NzMzMy0xODAuOTkyYTMyIDMyIDAgMCAwIDAtNDUuMjI2NjY3bC0xODEuMDc3MzMzLTE4MS4wNzczMzNhMzIgMzIgMCAwIDAtNDUuMjI2NjY3IDQ1LjMxMmwxNTguNDIxMzMzIDE1OC4zMzYtMTU4LjQyMTMzMyAxNTguNDIxMzMzYTMyIDMyIDAgMCAwIDAuNDI2NjY3IDQ0Ljh6IiBmaWxsPSIjMDA3Q0ZGIiBwLWlkPSIxNzYxNiI+PC9wYXRoPjwvc3ZnPg==)
      center center no-repeat;
    background-size: 100% 100%;
  }

  .feat2 > a {
    font-size: 18px;
    color: #007cff;
    position: relative;
    cursor: pointer;
    line-height: 24px;
    display: inline-block;
    margin-top: 10px;
  }

  .feat2 > a:after {
    content: "";
    top: 4px;
    width: 18px;
    height: 18px;
    position: absolute;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVFJREFUaEPt2EFKA0EQheG/QbyBguDGC3gGL+EVvIMacQJZiCCuvYKX8AzeQMgBXESSLISW2UlIMrRdr8qBnu1QzfuqelEziZE/aeT5aYDoCbYJtAlUdsDmCt3kEw75pEvryjzF5fWASe6Ae2ABPDFL0+IUFQUWgDlw+itD54mwALwBFxtNdEPUA27zJYnXLbfABVEP6JMHImwAgQg7QBDCFhCAsAc4IzQAR4QO4ITQAhwQeoAY4QMQIvwAIoQvYB/imzMe0kfpZv1fAAsOOP7LB5EvYPfSN2WW+g+j4scPIAjfa30AwnVbDxCG109AHF4LcAivAziF1wAcw9sDnMPbAgLC2wGCwtsAAsNbAd5JnI/31+Ik56jwNhO4y1dkXoAl8Oj5Z9oG0J9ynY9Y88VzWhXvw5UF+mWuMuBQeQMMdUj9vk1A3eGh89sEhjqkfv8D19+OMY99eSEAAAAASUVORK5CYII=)
      center center no-repeat;
    background-size: 100% 100%;
  }

  .feat3 > a {
    font-size: 18px;
    color: #007cff;
    position: relative;
    cursor: pointer;
    line-height: 24px;
    display: inline-block;
    margin-top: 10px;
  }

  .feat3 > a:after {
    content: "";
    top: 2px;
    width: 24px;
    height: 24px;
    position: absolute;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTY1MzU2MDQ3MzQwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3NjE1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwNC43MzYgNzE3LjA1NmEzMiAzMiAwIDAgMCA0NC44NDI2NjcgMC4zODRsMTgxLjA3NzMzMy0xODAuOTkyYTMyIDMyIDAgMCAwIDAtNDUuMjI2NjY3bC0xODEuMDc3MzMzLTE4MS4wNzczMzNhMzIgMzIgMCAwIDAtNDUuMjI2NjY3IDQ1LjMxMmwxNTguNDIxMzMzIDE1OC4zMzYtMTU4LjQyMTMzMyAxNTguNDIxMzMzYTMyIDMyIDAgMCAwIDAuNDI2NjY3IDQ0Ljh6IiBmaWxsPSIjMDA3Q0ZGIiBwLWlkPSIxNzYxNiI+PC9wYXRoPjwvc3ZnPg==)
      center center no-repeat;
    background-size: 100% 100%;
  }

  .feat3 > .aCrypto {
    color: #fff;
    margin-top: 0;
  }

  .feat3 > .aCrypto:after {
    content: "";
    top: 4px;
    width: 18px;
    height: 18px;
    position: absolute;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUJJREFUaEPt2MFJRDEQxvH/FOGC4MUGrGGbsAXbcPcqbAG2YBPWYAeCBXhQ1NvIAw+yiCFmvhkfJOfk8f1mcpg8Y+XLVp6fCaju4OzA7MBgBUKukLufAs9m9jGYp/v4MMDdd8A18AIczGzfnWLgQATgCTj7lmGXiYgA3APboyKmISIAl8DdD7cgBTEMWIK7exkiBFCJCANUIUIBFYhwQDZCAshEyABZCCkgAyEHqBEpACUiDaBCpAIaiHMze+ydrP8LYHlLbP7yIEoF/DL07c1seRh1rzSAIvyiTQEox205QBle3gF1eCkgI7wMkBVeAsgMHw7IDh8KqAgfBqgKHwKoDB8FeAAu1vxr0avCR3XgCrgF3oCbzD/TIYCvR8oJ8Gpm793z8OAB+TA3mK95fAKaJRJvmB0QF7j5+dmBZonEGz4BCLqtMcMOP9QAAAAASUVORK5CYII=)
      center center no-repeat;
    background-size: 100% 100%;
  }

  .feat4 {
    overflow: hidden;
  }

  .feat4 > i {
    font-size: 18px;
    color: #fff;
    position: relative;
    cursor: pointer;
    line-height: 24px;
  }

  .feat4 > i:after {
    content: "";
    top: 2px;
    width: 24px;
    height: 24px;
    position: absolute;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAARFJREFUWAntljkOwjAQRRFLCNByRQquQk3BAUDs+46As1CQG9CHN5ItWa5o8KSwpa+ZSYr/9K04LpXiignEBAqcQJ7nXfRGfVRTRwUiQ3ataXShABhYGlOX1KpaUpjX0cnA2LKgUYe6WBpTZ9pQKQBXD2rKXNHcPoG6eVBjbagGAHcPalQEqIcHNWQua25fE4CnB9VTAxJjYNro40BlvwD9JUYgUszHqOVATJw+XCswyP/aJjwLfwRgKid3MQ5JA3OmumvOEP43gqkkc3RJ6HV+tBgn6ODBrJjDX0UMzM6D2ajAyHeLsdwU3bVlCJ+MPUQwfzk0e/rEvlOpAHSQ3Knl5qgLo5JANI0JxARiAgES+AJp/cqyTE9CTgAAAABJRU5ErkJggg==)
      center center no-repeat;
    background-size: 100% 100%;
  }

  .feat4.crypto {
    color: #fff !important;
    padding-right: 0 !important;
  }

  .feat4.crypto > p {
    position: relative;
    padding-bottom: 10px;
    color: #fff !important;
  }

  .iraWrap {
    background: #f4fbfd;
    padding: 63px 0 74px;
  }
  .trading-img {
    width: 100%;
    padding: 50px;
  }
  .image-tradding {
    width: 100%;
  }

  .iraWrapContent {
    width: 1200px;
    margin: 52px auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .iraWrapContent > img {
    width: 346px;
    height: 388px;
    margin-left: 102px;
  }

  .accountright {
    width: 100%;
    padding: 20px;
  }

  .accountWrap > img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }

  .accountWrap2 {
    margin-top: 50px;
  }

  .iraTitle {
    font-family: OpenSans-SemiBold, sans-serif;
    font-size: 28px;
    color: #000;
    line-height: 40px;
  }

  .iraDesc {
    font-size: 18px;
    color: #000;
    padding: 10px 0 15px;
    line-height: 27px;
    width: 100%;
  }

  .part3 {
    width: 100%;
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: space-between;
  }
  .wbus-ssr2271631 > div {
    top: 0px;
    bottom: 0px;
    display: block;
    justify-content: center;
    align-item: center;
    opacity: 1;
  }
  .image-content {
    width: 100%;
    opacity: "1";
  }
  .image-content-fixed {
    position: fixed;
  }
  .wbus-ssr2271634 {
    display: none;
    width: 100%;
    margin: 0;
    overflow-y: hidden;
    height: 600px;
    will-change: opacity, transform;
    flex-direction: column;
    justify-content: center;
    transform-style: preserve-3d;
  }

  .display-content {
    width: 100%;
    padding: 10px;
    display: flex;
  }

  .wbus-ssr2271634 > p {
    width: 100%;
    font-size: 36px;
    font-family: sans-serif;
    white-space: pre-line;
  }
  .wbus-ssr2271634 > p:nth-of-type(2) {
    font-size: 18px;
    margin-top: 20px;
    font-family: sans-serif;
    line-height: 28px;
  }
  .scroll {
    width: 100%;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
  }

  .part5 {
    background: #f4fbfd;
    position: relative;
  }
  .partContent {
    width: 100%;
  }
  .part5Content {
    width: 100%;
    padding: 20px
  }
  .part5Des {
    padding-top: 20px;
    font-size: 18px;
    width: 100%;
    padding-right: 40px;
    line-height: 28px;
    position: relative;
  }
  .openAccountBtn {
    cursor: pointer;
    width: 204px;
    margin-top: 40px;
    text-align: center;
    padding: 16px 0;
    background: #007cff;
    border-radius: 27px;
    font-family: OpenSans-SemiBold, sans-serif !important;
    font-size: 16px;
    color: #fff;
    border: none;
  }
  .part5Tips {
    padding-top: 50px;
    font-size: 16px;
    color: #000;
    line-height: 22px;
    opacity: 0.6;
  }

  .part6 {
    width: 100%;
    background: #0052af;
  }
  .part6 > div > img {
    width: 100%;
  }

  .part6 > div > p {
    margin: -150px auto 0;
    width: 100%;
    font-family: OpenSans-Regular, sans-serif !important;
    font-size: 18px;
    color: #fff;
    text-align: center;
    line-height: 28px;
  }

  .part6Tips {
    padding-top: 31px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    display: flex;
    font-family: OpenSans-Regular, sans-serif !important;
    font-size: 18px;
    color: #ffffffb3;
  }

  .part6Tips > div {
    position: relative;
    cursor: pointer;
    font-family: OpenSans-Regular, sans-serif !important;
  }
  .part6Tips > div:last-child {
    padding-left: 57px;
  }
`;
