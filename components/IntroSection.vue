<template>
  <a-intro>
    <template #background></template>

    <template #default>
      <v-carousel
        cycle
        continuous
        class="intro-section__carousel"
        hide-delimiters
        height="100%"
      >
        <!-- <v-carousel-item class="pt-4 pb-12 dark-text--secondary">
          <v-container>
            <v-row
              justify="center"
              justify-md="space-between"
              align-sm="center"
            >
              <v-col
                class="max-width-600 px-4 pl-sm-5 pl-md-0 text-center text-md-left"
              >
                <h2
                  class="mt-12 mt-md-0 mb-8 dark-text--primary display-1 font-weight-bold"
                >
                  THE KINGDOM OF KINGS 2
                </h2>

                <p class="title accent white--text py-1 px-2">
                  4 PM This Saturday, June 26th 2021
                </p>

                <p class="headline font-weight-thin dark-text--primary mb-8">
                  We raise our incense of <em>Worship</em> to the
                  <em>King of kings</em> and <em>sicknesses</em> find their way
                  out in <em>the atmosphere of Jesus</em>

                  <br /><br />
                  Hallelujah!
                </p>
              </v-col>

              <v-col cols="12" sm="6">
                <v-img
                  src="/img/flyers/2021/The-Kingdom-of-Kings-2.jpg"
                  max-width="100%"
                  width="100%"
                  :max-height="540"
                  :aspect-ratio="1"
                  contain
                  class="filter-elevation-2"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item> -->

        <v-carousel-item class="pt-4 pb-12 dark-text--secondary">
          <v-container>
            <v-row
              justify="center"
              justify-md="space-between"
              align-md="center"
            >
              <v-col
                class="max-width-600 px-4 pl-sm-5 pl-md-0 text-center text-md-left"
              >
                <h1
                  class="mt-12 mt-md-0 mb-8 dark-text--primary display-3 font-weight-bold"
                >
                  ARISE!
                </h1>

                <!-- <p class="headline font-weight-thin dark-text--primary mb-8">
                  Experience the fellowship of the Spirit at the
                  non-denominational fellowship of the believers.
                </p> -->

                <p class="headline font-weight-thin dark-text--primary mb-8">
                  a place where an army of men who knows God, loves God, and
                  lives in the light of God's purpose for their lives are raised
                </p>

                <!-- <v-btn nuxt large color="primary" to="/arise" class="mb-12"
                  >Learn More</v-btn
                > -->
              </v-col>

              <v-col>
                <v-img
                  :src="
                    require('~/assets/img/spoken-words/arise-is-a-place-where-giants-are-born.jpg')
                  "
                  :max-height="540"
                  contain
                  class="filter-elevation-2"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>

      <div
        class="intro-section__notification secondary lighten-1 pl-4 pl-sm-12 pr-4 py-3 d-flex align-center"
      >
        <v-icon color="primary lighten-3" dark class="mr-3" v-text="mdiBell" />

        <span class="subtitle-1 dark-text--primary"
          >Join us by 4 PM {{ daysToSaturdayOffset }} online on at
          <a href="https://www.mixlr.com/ariseSCN"
            >https://mixlr.com/ariseSCN</a
          >
        </span>
      </div>
    </template>
  </a-intro>
</template>

<script>
import AIntro from '@/components/AIntro'

import { mdiBell } from '@mdi/js'

export default {
  name: 'IntroSection',

  components: {
    AIntro
  },

  data() {
    return {
      mdiBell
    }
  },

  computed: {
    daysToSaturdayOffset() {
      const date = new Date()

      const dayOfTheWeek = date.getDay()

      const timeOfTheDay = date.getHours()

      if (dayOfTheWeek === 6) {
        if (timeOfTheDay < 17) {
          return 'today'
        } else if (timeOfTheDay >= 17 && timeOfTheDay < 20) {
          return 'now'
        } else {
          return 'next Saturday'
        }
      } else if (dayOfTheWeek === 5) {
        return 'tomorrow'
      } else if (dayOfTheWeek === 4) {
        return 'next tomorrow'
      } else {
        return 'this Saturday'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.intro-section {
  &__carousel {
    &__img {
      background: black;
      width: 100%;
      height: calc(100% - 52px);
      object-fit: contain;
      position: relative;

      @media #{map-get($display-breakpoints, 'md-and-up')} {
        height: calc(100% - 60px);
      }
    }
  }

  &__notification {
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    // FIXME: make scss prepend variables
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      width: 50%;
    }
  }
}
</style>
