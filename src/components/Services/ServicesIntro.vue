<template>
  <div class="service-info">
    <div class="service-header">
      <div class="service-img-wrapper">
        <p class="header-title">Services</p>
      </div>
    </div>
    <div class="container">
      <div class="service-info-wrapper">
        <services
          v-for="(service, idx) in services"
          :key="idx"
          :title="service.title"
        >
          <div class="development-type-wrapper">
            <service-type
              v-for="(card, idx) in service.cards"
              :key="idx"
              :title="card.title"
              :content="card.content"
              :price="card.price"
            />
          </div>
        </services>
      </div>
    </div>
  </div>
</template>


<script>
import Services from "@/components/Services/Services.vue";
import ServiceType from "@/components/Services/ServiceType.vue";
export default {
  components: { Services, ServiceType },
  data() {
    return {
      services: [
        {
          title: "Web Development",
          cards: [
            {
              title: "Landing Page",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Site Catalog",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Corporative Site",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Landing Page",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Site Catalog",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Corporative Site",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
          ],
        },
        {
          title: "Mobile Development",
          cards: [
            {
              title: "Landing Page",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Site Catalog",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Corporative Site",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Landing Page",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Site Catalog",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Corporative Site",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
          ],
        },
        {
          title: "Business Automation",
          cards: [
            {
              title: "Landing Page",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Site Catalog",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Corporative Site",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Landing Page",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Site Catalog",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Corporative Site",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
          ],
        },
        {
          title: "UX/UI Design",
          cards: [
            {
              title: "Landing Page",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Site Catalog",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Corporative Site",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Landing Page",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Site Catalog",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Corporative Site",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
          ],
        },
        {
          title: "Digital Marketing",
          cards: [
            {
              title: "Landing Page",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Site Catalog",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Corporative Site",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Landing Page",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Site Catalog",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
            {
              title: "Corporative Site",
              content:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
              price: 6000000,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.service-info {
  padding-top: 71px;

  &-wrapper {
    padding: 100px 0;

    @media screen and (max-width:1904px)  {
      padding: 80px 0;
    }

    @media screen and (max-width:1264px)  {
      padding: 70px 15px;
    }
    @media screen and (max-width:960px)  {
      padding: 60px 15px;
    }
  }

  .service-header {
    background-image: url(@/assets/img/service-img.png);
    background-repeat: no-repeat;
    background-size: cover;

    .service-img-wrapper {
      display: flex;
      position: relative;
      width: 100%;
      height: 380px;
      overflow: hidden;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #217a73;
        opacity: 0.5;
      }

      .header-title {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        font-family: "Seg-bold";
        font-size: 40px;
        color: #ffffff;
        z-index: 2;
         @media(max-width: 425px){
          font-size: 35px;
        }
      }
    }
  }

  .development-type-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 47px;
    row-gap: 32px;

    @media screen and (max-width:1904px)  {
      grid-template-columns: repeat(2, 1fr);
    }

   @media screen and (max-width:960px)  {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
