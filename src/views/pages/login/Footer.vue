<template>
  <n-layout-footer
    bordered
    class="footer"
    :class="{
      ['footer--centered']: centered
    }"
  >
    <div class="footer-links">
      <div class="footer-links-col">
        <n-text depth="1" class="col-header">resources</n-text>
        <n-button disabled text>designResources</n-button>
        <n-button text tag="a" target="_blank" href="https://www.xicons.org"
          >icons</n-button
        >
      </div>
      <div class="footer-links-col">
        <n-text depth="1" class="col-header">help</n-text>
        <n-button text>commonIssues</n-button>
        <n-button text>changelog</n-button>
        <n-button
          text
          tag="a"
          target="_blank"
          href="https://naive-ui.github.io/issue-helper/"
        >
          reportBug
        </n-button>
      </div>
      <div class="footer-links-col">
        <n-text depth="1" class="col-header">community</n-text>
        <n-button text tag="a" target="_blank"> GitHub </n-button>
        <n-button
          text
          tag="a"
          href="https://discord.gg/Pqv7Mev5Dd"
          target="_blank"
        >
          Discord
        </n-button>
        <n-tooltip>
          <template #trigger>
            <n-button text>dingTalk</n-button>
          </template>
          dingTalkGroupChat
        </n-tooltip>
      </div>
      <div class="footer-links-col footer-links-col--last">
        <n-text depth="1" class="col-header">contact</n-text>
        <n-button text tag="a" target="_blank" href="https://www.tusimple.com/"
          >tusimple</n-button
        >
        <n-button text tag="a" target="_blank">joinUs</n-button>
      </div>
    </div>
    <n-divider class="footer-divider" />
    <div style="text-align: center; padding: 20px">
      <n-text depth="3">Naive UI · Made by TuSimple</n-text>
    </div>
  </n-layout-footer>
</template>

<script lang="ts">
import { NLayoutFooter, NText, NDivider, NButton, NTooltip } from "naive-ui";
export default {
  props: {
    centered: Boolean
  },
  components: {
    NLayoutFooter,
    NText,
    NDivider,
    NButton,
    NTooltip
  }
};
</script>

<style scoped>
.footer {
  --x-padding: 56px;
  margin-top: auto;
}

.footer.footer--centered .footer-links {
  margin: auto;
  max-width: 960px;
  --x-padding: 36px;
}

.footer-links {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: var(--x-padding);
  padding-bottom: 0;
  padding-top: 32px;
}

.footer-links-col {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 24px;
  padding-bottom: 24px;
}

.col-header {
  white-space: nowrap;
}

@media only screen and (min-width: 1024px) {
  .footer.footer--centered .footer-links-col.footer-links-col--last {
    flex: 0 0 0;
  }
}

.footer.footer--centered .footer-links-col {
  width: initial;
}

.footer-divider {
  margin: 0;
  padding: 0 var(--x-padding);
}

.footer-links-col > * {
  line-height: 2;
}

.col-header {
  font-weight: 500;
}

.link {
  text-decoration: none;
}
</style>
