import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  margin: 0 auto;
  padding: .5rem 3rem 0;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 4px 30px 5px rgba(0, 0, 0, 0.04);
  max-width: 1800px;
  position: relative;
  &.open {
    opacity: 0.3;
 }
  .logo-group{
    display: flex;
    justify-content: center;
    align-item:center;
    img{
      width: 100px;
      height: auto;
    }
  }

  .header-links{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navigation{
    display: flex;
    align-items: center;
    justify-content: end;
    .header-btn{
      a{
        padding: .3rem 1rem;
        font-size: .9rem;
        font-weight: 600;
        img{
          width: 10px;
          margin-top: 0.2rem;
        }
      }
    }
    .nav-link{
      margin: 0 1rem 0 .5rem;
      text-decoration: none;
      color: #555555;
      padding: 1.5rem .5rem;
      &::before{
        content: '',
        position: absolute;
        bottom: 0;
        left:0;
        right: 0;
        background-color: #FBA819;
        height: 4px;
        width: 100%;
      }
      // &.active{
      //   color: #FBA819;
      //   font-weight: 600;
      //   position: relative;
      // }

      &.active:hover{
        color: #FBA819;
      }

      &:hover{
        cursor: pointer;
        color: #919090;
      }
    }
  }

  .menu-group{
    position: absolute;
    display: none;
  }

  @media (max-width:1200px){
    .logo-group{
      img{
        width: 100px;
      }
    }

    // .header-links{
    //   width:80%;
    // }
  }
  @media (max-width:990px){
    .logo-group{
      img{
        width: 80px;
      }
    }
    .header-links{
      .navigation{
        .nav-link{
          font-size: .75rem;
          white-space: nowrap;
          margin: 0 .3rem;
        }
      }
    }
    div{
      a{
        padding: .3rem 1rem;
        font-size: .7rem;
        margin: 0 .5rem ;
      }
    }
  }
  @media (max-width:660px){
    padding: 1rem 2rem;
    .header-links{
      display: none;
    }
    .menu-group{
      position: relative;
      display: inline-flex;
    }
  }
  @media (max-width:520px){
    padding: 1rem;
    }
  }

`