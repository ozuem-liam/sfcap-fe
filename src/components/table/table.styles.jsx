import styled from "styled-components";

export const TableContainer = styled("div")`
width:100%;
display:flex;
justify-content:center;
align-items:center;

.wrapper{
width:100%;
display:flex;
flex-direction:column;
justify-content:center
align-items:center;
border:1px solid transparent;
border-radius:1.5rem 1.5rem 0 0;
overflow:hidden;

.header{
  background:#0f1114;
  width:100%;
  display:flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid #2a2e37;
border-left:0.5rem solid transparent;
padding:1.7rem 1rem;

.head{
  & > strong{
font-size:1rem;
color:#ffffff;
}
}
}

.container{
.dataRow{
  width:100%;
  background:#15171b;
  display:flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid #2a2e37;
border-left:0.3rem solid #00B4AE;
padding:1.5rem 1rem;
transition:0.4s;

}
.dataRow:hover{
  background:#15171b;
 
border-left:0.3rem solid  #33a654;
padding:1.65rem 1rem;
transition:0.4s;
}
.row{

  .data{
    & > span{

    }
  }

  .lnColumn{
width:5%;
color:#b8bec8;
font-size:1rem;
  }
  .nameColumn{
width:15%;
color:#b8bec8;
font-size:1.3rem;
font-weight:bolder;
  }
  .amountPaidColumn{
width:15%;
color:#b8bec8;
font-size:1rem;
  }
  .addressColumn{
width:30%;
color:#00B4AE;
font-size:1rem;
  }
  .paymentMethodColumn{
width:15%;
color:#b8bec8;
font-size:1.3rem;
font-weight:bolder;
display:flex;
justify-content:flex-start;
align-items:center;
  }
  .statusColumn{
width:10%;
font-size:1rem;
color: #33a654;
  }
}
}


.container:hover{
.dataRow{
-webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
}
.dataRow:hover{
  background:#15171b;
   -webkit-filter: none;
    -moz-filter: none;
    -o-filter: none;
    -ms-filter: none;
    filter: none;
}
.row{
  .data{
     -webkit-filter:none;
    -moz-filter:none;
    -o-filter:none;
    -ms-filter:none;
    filter:none;
    & > span{

    }
  }

}
}


.footer{
background:#15171b;
  width:100%;
  display:flex;
justify-content:flex-start;
align-items:center;
border-bottom:1px solid #2a2e37;
border-left:0.3rem solid transparent;
padding:1.7rem 2rem;
p{
  font-size:1rem;
  margin:0;
  text-align:center;
}
}
}

  @media screen and (max-width: 950px) {
.wrapper{
.header{
.head{
  & > strong{
font-size:0.7rem;
}
}
}.container{
.dataRow{
border-left:0.2rem solid #00B4AE;
padding:1.2rem 1rem;
}
.dataRow:hover{
padding:1.25rem 1rem;
}
.row{
  .lnColumn{
font-size:0.8rem;
  }
  .nameColumn{
font-size:0.9rem;
  }
  .amountPaidColumn{
font-size:0.7rem;
  }
  .addressColumn{
font-size:0.7rem;
  }
  .paymentMethodColumn{
font-size:0.9rem;
  }
  .statusColumn{
width:10%;
font-size:0.7rem;
  }
}
}
.footer{
border-left:0.2rem solid transparent;
padding:1.3rem 1rem;
p{
  font-size:0.7rem;
}
}
}
  }

    @media screen and (max-width: 700px) {
.wrapper{
  overflow:scroll;
.header{
  padding:1.5rem 0.1rem;
.head{
  & > strong{
font-size:0.5rem;
}
}
}
.container{
.dataRow{
border-left:0.2rem solid #00B4AE;
padding:1.2rem 0.1rem;
}
.dataRow:hover{
  background:#15171b;
border-left:0.3rem solid #5e8336;
padding:1.2rem 0.3rem;
transition:0.4s;
}
.row{
  .lnColumn{
font-size:0.6rem;
width:1%;
  }
  .nameColumn{
font-size:0.7rem;
  }
  .amountPaidColumn{
font-size:0.5rem;
width:10%;
  }
  .addressColumn{
font-size:0.5rem;
width:35%;
  }
  .paymentMethodColumn{
font-size:0.5rem;
width:10%;
.dollarSign{
  display:none;
}
  }
  .statusColumn{
width:8%;
font-size:0.5rem;
  }
}
}
.footer{
border-left:0.2rem solid transparent;
padding:1.3rem 0.4rem;
p{
  font-size:0.5rem;
}
}
}
  }
`;
