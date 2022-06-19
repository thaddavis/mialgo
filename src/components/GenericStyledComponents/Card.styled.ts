import styled from "styled-components";

export const CardGrid = styled.div<{}>`
  .container {
    width: 100%;
    max-width: 960px;
    margin: 100px auto;
  }

  img {
    height: 200px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    display: block;
    padding: 1em;
  }

  /*Card Styling*/

  .card {
    border: 1px solid #dedede;
    background-color: white;

    &__wrap {
      &--inner {
        padding: 12px;
      }
    }

    &__item {
      text-align: center;
      padding: 12px 18px 12px 18px;
    }

    &__sub {
      padding: 0 18px;
    }

    &__footer {
      padding: 18px;
      overflow: hidden;
      border-top: 1px solid #dedede;
    }
  }

  /*Card Flex Code*/

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    &__wrap {
      &--outer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        // align-items: center;
        flex-wrap: wrap;
        width: 100%;
      }

      &--inner {
        display: flex;
        flex-direction: row;
        width: 100%;

        @media (min-width: 480px) {
          width: 50%;
        }

        @media (min-width: 1024px) {
          width: 33.33%;
        }
      }
    }
  }

  .flexible {
    flex-grow: 1;
  }
`;
