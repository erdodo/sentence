var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, event, } from 'fstp-ui/src/components/base.component';
import { svg } from 'lit';
import { MoleculeAddWidgetDefaultItems, MoleculeAddWidgetItemTypeEnum, } from 'fstp-ui/src/models/molecules';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeAddWidgetComponent = class MoleculeAddWidgetComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fItems = MoleculeAddWidgetDefaultItems;
    }
    render() {
        return html `
      <div class="flw-add-widget">
        ${this.fItems.map((item) => html `
            <button
              class="flw-add-widget__item"
              type="button"
              @click="${() => {
            this.fClick?.(item);
        }}"
            >
              <div class="flw-add-widget__icon">${this.getItem(item)}</div>
              <div class="flw-add-widget__title ">${item.fLabel}</div>
            </button>
          `)}
      </div>
    `;
    }
    getItem(item) {
        switch (item.fType) {
            case MoleculeAddWidgetItemTypeEnum.BAR_CHART:
                return svg `
          <svg
            width="174"
            height="138"
            viewBox="0 0 174 138"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1028_4617)">
              <path
                d="M18.5897 92.576C18.5897 88.2853 22.068 84.807 26.3587 84.807C30.6494 84.807 34.1277 88.2853 34.1277 92.576V114.231C34.1277 118.522 30.6494 122 26.3587 122C22.068 122 18.5897 118.522 18.5897 114.231V92.576Z"
                fill="var(--primary-emphasis)"
              />
            </g>
            <path
              d="M38.6596 70.2602C38.6596 65.9695 42.1379 62.4912 46.4286 62.4912C50.7193 62.4912 54.1976 65.9695 54.1976 70.2602V114.231C54.1976 118.522 50.7193 122 46.4286 122C42.1379 122 38.6596 118.522 38.6596 114.231V70.2602Z"
              fill="var(--secondary-emphasis)"
            />
            <path
              d="M59.3769 55.383C59.3769 51.0923 62.8552 47.614 67.1459 47.614C71.4366 47.614 74.9149 51.0923 74.9149 55.383V114.231C74.9149 118.522 71.4366 122 67.1459 122C62.8552 122 59.3769 118.522 59.3769 114.231V55.383Z"
              fill="var(--primary-emphasis)"
            />
            <g clip-path="url(#clip1_1028_4617)">
              <path
                d="M79.9877 95.7998C79.9877 91.685 83.3234 88.3492 87.4383 88.3492C91.5532 88.3492 94.8889 91.685 94.8889 95.7998V114.549C94.8889 118.664 91.5532 122 87.4383 122C83.3234 122 79.9877 118.664 79.9877 114.549V95.7998Z"
                fill="var(--secondary-emphasis)"
              />
            </g>
            <g clip-path="url(#clip2_1028_4617)">
              <path
                d="M99.5167 62.8216C99.5167 58.5309 102.995 55.0526 107.286 55.0526C111.576 55.0526 115.055 58.5309 115.055 62.8216V114.231C115.055 118.522 111.576 122 107.286 122C102.995 122 99.5167 118.522 99.5167 114.231V62.8216Z"
                fill="var(--primary-emphasis)"
              />
            </g>
            <path
              d="M120.234 77.6988C120.234 73.4081 123.712 69.9298 128.003 69.9298C132.294 69.9298 135.772 73.4081 135.772 77.6988V114.231C135.772 118.522 132.294 122 128.003 122C123.712 122 120.234 118.522 120.234 114.231V77.6988Z"
              fill="var(--secondary-emphasis)"
            />
            <path
              d="M140.088 70.2602C140.088 65.9695 143.566 62.4912 147.857 62.4912C152.148 62.4912 155.626 65.9695 155.626 70.2602V114.231C155.626 118.522 152.148 122 147.857 122C143.566 122 140.088 118.522 140.088 114.231V70.2602Z"
              fill="var(--primary-emphasis)"
            />
            <defs>
              <clipPath id="clip0_1028_4617">
                <rect
                  width="20.2857"
                  height="106"
                  fill="white"
                  transform="translate(16 16)"
                />
              </clipPath>
              <clipPath id="clip1_1028_4617">
                <rect
                  width="20.2857"
                  height="106"
                  fill="white"
                  transform="translate(76.8571 16)"
                />
              </clipPath>
              <clipPath id="clip2_1028_4617">
                <rect
                  width="20.2857"
                  height="106"
                  fill="white"
                  transform="translate(97.1429 16)"
                />
              </clipPath>
            </defs>
          </svg>
        `;
            case MoleculeAddWidgetItemTypeEnum.LINE_CHART: {
                return svg `
          <svg width="144" height="72" viewBox="0 0 144 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Lines">
          <path id="Line" d="M1 56L25.2602 41.7407L48.6301 56L72.2226 1L95.815 27.9907L119.408 14.4954L143 56" stroke="var(--primary-emphasis)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path id="Line_2" d="M1 27.061L25.0376 14L48.4075 27.061L71.7774 41.6585L95.5925 56L119.185 41.6585L143 27.061" stroke="var(--secondary-emphasis)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path id="Line_3" d="M1 42L24.2934 55.6174L48.0347 42L71.776 55.6174L95.5173 71L119.259 55.6174L143 42" stroke="var(--info-emphasis)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          </svg>

       `;
            }
            case MoleculeAddWidgetItemTypeEnum.PIE_CHART: {
                return svg ` 
        <svg width="174" height="138" viewBox="0 0 174 138" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M134.631 96.5C129.192 105.921 121.082 113.517 111.326 118.328C101.57 123.139 90.606 124.949 79.8211 123.529C69.0362 122.11 58.9145 117.524 50.736 110.351C42.5575 103.179 36.6895 93.7424 33.8741 83.2351L87 69L134.631 96.5Z" fill="var(--info-emphasis)"/>
        <path d="M33.8741 83.2351C31.6906 75.0862 31.411 66.5443 33.0568 58.27C34.7027 49.9958 38.2299 42.2111 43.3656 35.5181C48.5013 28.8251 55.1078 23.4033 62.6741 19.672C70.2404 15.9407 78.5637 14 87 14V69L33.8741 83.2351Z" fill="var(--secondary-emphasis)"/>
        <path d="M87 14C96.6545 14 106.139 16.5413 114.5 21.3686C122.861 26.1959 129.804 33.1389 134.631 41.5C139.459 49.8611 142 59.3455 142 69C142 78.6545 139.459 88.1389 134.631 96.5L87 69V14Z" fill="var(--primary-emphasis)"/>
        <mask id="path-4-inside-1_1028_4665" fill="white">
        <path d="M134.631 96.5C129.192 105.921 121.082 113.517 111.326 118.328C101.57 123.139 90.606 124.949 79.8211 123.529C69.0362 122.11 58.9145 117.524 50.736 110.351C42.5575 103.179 36.6895 93.7424 33.8741 83.2351L87 69L134.631 96.5Z"/>
        </mask>
        <path d="M134.631 96.5C129.192 105.921 121.082 113.517 111.326 118.328C101.57 123.139 90.606 124.949 79.8211 123.529C69.0362 122.11 58.9145 117.524 50.736 110.351C42.5575 103.179 36.6895 93.7424 33.8741 83.2351L87 69L134.631 96.5Z" stroke="var(--neutral-100)" stroke-width="6" mask="url(#path-4-inside-1_1028_4665)"/>
        <mask id="path-5-inside-2_1028_4665" fill="white">
        <path d="M33.8741 83.2351C31.6906 75.0862 31.411 66.5443 33.0568 58.27C34.7027 49.9958 38.2299 42.2111 43.3656 35.5181C48.5013 28.8251 55.1078 23.4033 62.6741 19.672C70.2404 15.9407 78.5637 14 87 14V69L33.8741 83.2351Z"/>
        </mask>
        <path d="M33.8741 83.2351C31.6906 75.0862 31.411 66.5443 33.0568 58.27C34.7027 49.9958 38.2299 42.2111 43.3656 35.5181C48.5013 28.8251 55.1078 23.4033 62.6741 19.672C70.2404 15.9407 78.5637 14 87 14V69L33.8741 83.2351Z" stroke="var(--neutral-100)" stroke-width="6" mask="url(#path-5-inside-2_1028_4665)"/>
        <mask id="path-6-inside-3_1028_4665" fill="white">
        <path d="M87 14C96.6545 14 106.139 16.5413 114.5 21.3686C122.861 26.1959 129.804 33.1389 134.631 41.5C139.459 49.8611 142 59.3455 142 69C142 78.6545 139.459 88.1389 134.631 96.5L87 69V14Z"/>
        </mask>
        <path d="M87 14C96.6545 14 106.139 16.5413 114.5 21.3686C122.861 26.1959 129.804 33.1389 134.631 41.5C139.459 49.8611 142 59.3455 142 69C142 78.6545 139.459 88.1389 134.631 96.5L87 69V14Z" stroke="var(--neutral-100)" stroke-width="6" mask="url(#path-6-inside-3_1028_4665)"/>
        </svg>

        `;
            }
            case MoleculeAddWidgetItemTypeEnum.POLAR_AREA_CHART: {
                return svg `
        <svg width="174" height="138" viewBox="0 0 174 138" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_1028_4676" fill="white">
        <path d="M133.809 69C133.809 78.885 130.68 88.5163 124.869 96.5134C119.059 104.511 110.866 110.463 101.465 113.518L87.0003 69H133.809Z"/>
        </mask>
        <path d="M133.809 69C133.809 78.885 130.68 88.5163 124.869 96.5134C119.059 104.511 110.866 110.463 101.465 113.518L87.0003 69H133.809Z" fill="var(--primary-emphasis)" stroke="var(--neutral-100)" stroke-width="6" mask="url(#path-1-inside-1_1028_4676)"/>
        <mask id="path-2-inside-2_1028_4676" fill="white">
        <path d="M103.996 16.6919C115.042 20.2811 124.669 27.2752 131.496 36.6718C138.323 46.0684 142 57.3852 142 69L87 69L103.996 16.6919Z"/>
        </mask>
        <path d="M103.996 16.6919C115.042 20.2811 124.669 27.2752 131.496 36.6718C138.323 46.0684 142 57.3852 142 69L87 69L103.996 16.6919Z" fill="var(--secondary-emphasis)" stroke="var(--neutral-100)" stroke-width="6" mask="url(#path-2-inside-2_1028_4676)"/>
        <mask id="path-3-inside-3_1028_4676" fill="white">
        <path d="M55.7583 46.3015C60.5518 39.7039 67.3109 34.7931 75.0669 32.273C82.8229 29.753 91.1777 29.753 98.9337 32.273L87.0003 69L55.7583 46.3015Z"/>
        </mask>
        <path d="M55.7583 46.3015C60.5518 39.7039 67.3109 34.7931 75.0669 32.273C82.8229 29.753 91.1777 29.753 98.9337 32.273L87.0003 69L55.7583 46.3015Z" fill="var(--info-emphasis)" stroke="var(--neutral-100)" stroke-width="6" mask="url(#path-3-inside-3_1028_4676)"/>
        <mask id="path-4-inside-4_1028_4676" fill="white">
        <path d="M58.5986 89.6353C54.2408 83.6375 51.8938 76.414 51.8938 69.0002C51.8938 61.5864 54.2408 54.3629 58.5986 48.3651L87.0004 69.0002L58.5986 89.6353Z"/>
        </mask>
        <path d="M58.5986 89.6353C54.2408 83.6375 51.8938 76.414 51.8938 69.0002C51.8938 61.5864 54.2408 54.3629 58.5986 48.3651L87.0004 69.0002L58.5986 89.6353Z" fill="var(--secondary-emphasis)" stroke="var(--neutral-100)" stroke-width="6" mask="url(#path-4-inside-4_1028_4676)"/>
        <mask id="path-5-inside-5_1028_4676" fill="white">
        <path d="M102.55 116.857C92.4436 120.141 81.5571 120.141 71.4508 116.857C61.3445 113.573 52.5371 107.174 46.2911 98.5773L87.0004 69.0003L102.55 116.857Z"/>
        </mask>
        <path d="M102.55 116.857C92.4436 120.141 81.5571 120.141 71.4508 116.857C61.3445 113.573 52.5371 107.174 46.2911 98.5773L87.0004 69.0003L102.55 116.857Z" fill="var(--info-emphasis)" stroke="var(--neutral-100)" stroke-width="6" mask="url(#path-5-inside-5_1028_4676)"/>
        </svg>

        `;
            }
            case MoleculeAddWidgetItemTypeEnum.RADAR_CHART: {
                return svg `
        <svg width="114" height="112" viewBox="0 0 114 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Radar">
          <g id="Data">
          <g id="Data / 3">
          <path id="Data_2" opacity="0.64" d="M1 17.0769V79.6923L62.0043 101.692L77.2553 56L113 22.1538L62.0043 17.0769H1Z" fill="var(--secondary-clear)"/>
          <path id="Line" d="M1 17.0769V79.6923L62.0043 101.692L77.2553 56L113 22.1538L62.0043 17.0769H1Z" stroke="var(--secondary-emphasis)" stroke-width="2" stroke-linejoin="round"/>
          </g>
          <g id="Data / 2">
          <path id="Data_3" opacity="0.64" d="M51.0425 43.3077L31.5021 63.6154L62.0042 74.1923L107.757 71.6538L76.3021 40.3461L62.0042 17.0769L51.0425 43.3077Z" fill="var(--info-clear)"/>
          <path id="Line_2" d="M51.0425 43.3077L31.5021 63.6154L62.0042 74.1923L107.757 71.6538L76.3021 40.3461L62.0042 17.0769L51.0425 43.3077Z" stroke="var(--info-emphasis)" stroke-width="2" stroke-linejoin="round"/>
          </g>
          <g id="Data / 1">
          <path id="Data_4" opacity="0.64" d="M31.5022 32.7308L16.2511 71.6538L62.0043 111L60.3186 59.4368L92.5064 32.3077L62.0043 1L31.5022 32.7308Z" fill="var(--primary-clear)"/>
          <path id="Line_3" d="M31.5022 32.7308L16.2511 71.6538L62.0043 111L60.3186 59.4368L92.5064 32.3077L62.0043 1L31.5022 32.7308Z" stroke="var(--primary-emphasis)" stroke-width="2" stroke-linejoin="round"/>
          </g>
          </g>
          </g>
          </svg>

        `;
            }
            case MoleculeAddWidgetItemTypeEnum.DATA_TABLE: {
                return svg `
          <svg width="174" height="138" viewBox="0 0 174 138" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M113.895 29H152C156.418 29 160 32.5817 160 37V53.8276H113.895V29Z" fill="var(--info-emphasis)"/>
          <rect x="113.895" y="56.5862" width="46.1053" height="24.8276" fill="var(--secondary-emphasis)"/>
          <path d="M113.895 84.1724H160V101C160 105.418 156.418 109 152 109H113.895V84.1724Z" fill="var(--secondary-emphasis)"/>
          <rect x="63.9474" y="29" width="46.1053" height="24.8276" fill="var(--info-emphasis)"/>
          <rect x="63.9474" y="56.5862" width="46.1053" height="24.8276" fill="var(--secondary-emphasis)"/>
          <rect x="63.9474" y="84.1724" width="46.1053" height="24.8276" fill="var(--secondary-emphasis)"/>
          <path d="M14 37C14 32.5817 17.5817 29 22 29H60.1053V53.8276H14V37Z" fill="var(--info-emphasis)"/>
          <rect x="14" y="56.5862" width="46.1053" height="24.8276" fill="var(--secondary-emphasis)"/>
          <path d="M14 84.1724H60.1053V109H22C17.5817 109 14 105.418 14 101V84.1724Z" fill="var(--secondary-emphasis)"/>
          </svg>

        `;
            }
            case MoleculeAddWidgetItemTypeEnum.GROUPED_DATA_CARD: {
                return svg `
       <svg width="174" height="138" viewBox="0 0 174 138" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="13" width="142" height="16" rx="8" fill="var(--secondary-clear)"/>
      <rect x="16" y="13" width="80.642" height="16" rx="8" fill="var(--secondary-emphasis)"/>
      <rect x="16" y="45" width="142" height="16" rx="8" fill="var(--info-clear)"/>
      <rect x="16" y="45" width="96.4198" height="16" rx="8" fill="var(--info-emphasis)"/>
      <rect x="16" y="77" width="142" height="16" rx="8" fill="var(--secondary-clear)"/>
      <rect x="16" y="77" width="61.358" height="16" rx="8" fill="var(--secondary-emphasis)"/>
      <rect x="16" y="109" width="142" height="16" rx="8" fill="var(--primary-clear)"/>
      <rect x="16" y="109" width="85.0247" height="16" rx="8" fill="var(--primary-core)"/>
      </svg>

       `;
            }
            case MoleculeAddWidgetItemTypeEnum.DATA_CARD: {
                return svg `
          <svg width="174" height="138" viewBox="0 0 174 138" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 69C16 51.3269 30.3269 37 48 37C65.6731 37 80 51.3269 80 69C80 86.6731 65.6731 101 48 101C30.3269 101 16 86.6731 16 69Z" fill="var(--secondary-clear)"/>
          <g clip-path="url(#clip0_1028_4727)">
          <path d="M53.1778 86.7778H52.7112C51.7706 86.6844 50.8843 86.2937 50.181 85.6623C49.4776 85.0309 48.9939 84.1917 48.8001 83.2667L42.8445 55.6667L36.7112 69.8889C36.5377 70.2864 36.2517 70.6244 35.8884 70.8614C35.5251 71.0983 35.1004 71.2237 34.6667 71.2222H28.0001C27.4107 71.2222 26.8455 70.9881 26.4287 70.5713C26.012 70.1546 25.7778 69.5894 25.7778 69C25.7778 68.4106 26.012 67.8454 26.4287 67.4286C26.8455 67.0119 27.4107 66.7778 28.0001 66.7778H33.2001L38.7778 53.9111C39.1533 53.0477 39.7933 52.3258 40.6055 51.8496C41.4177 51.3733 42.3601 51.1673 43.297 51.2613C44.2338 51.3552 45.1166 51.7442 45.8181 52.3722C46.5196 53.0002 47.0035 53.8348 47.2001 54.7555L53.1556 82.3333L59.2889 68.1556C59.4557 67.7497 59.7388 67.4023 60.1026 67.1572C60.4664 66.912 60.8947 66.78 61.3334 66.7778H68.0001C68.5894 66.7778 69.1547 67.0119 69.5714 67.4286C69.9882 67.8454 70.2223 68.4106 70.2223 69C70.2223 69.5894 69.9882 70.1546 69.5714 70.5713C69.1547 70.9881 68.5894 71.2222 68.0001 71.2222H62.8001L57.2223 84.0889C56.8817 84.8811 56.318 85.5572 55.5998 86.0346C54.8817 86.5121 54.0402 86.7703 53.1778 86.7778Z" fill="var(--secondary-emphasis)"/>
          </g>
          <path d="M92 56.3108C92 55.7585 92.4477 55.3108 93 55.3108H157C157.552 55.3108 158 55.7585 158 56.3108C158 56.8631 157.552 57.3108 157 57.3108H93C92.4477 57.3108 92 56.8631 92 56.3108Z" fill="var(--secondary-emphasis)"/>
          <path d="M92 69C92 68.4477 92.4477 68 93 68H157C157.552 68 158 68.4477 158 69C158 69.5523 157.552 70 157 70H93C92.4477 70 92 69.5523 92 69Z" fill="var(--secondary-emphasis)"/>
          <path d="M92 81.6892C92 81.1369 92.4477 80.6892 93 80.6892H157C157.552 80.6892 158 81.1369 158 81.6892C158 82.2415 157.552 82.6892 157 82.6892H93C92.4477 82.6892 92 82.2415 92 81.6892Z" fill="var(--secondary-emphasis)"/>
          <defs>
          <clipPath id="clip0_1028_4727">
          <rect width="53.3333" height="53.3333" fill="white" transform="translate(21.3334 42.3333)"/>
          </clipPath>
          </defs>
          </svg>
  
          `;
            }
            case MoleculeAddWidgetItemTypeEnum.DIVIDER_LINE: {
                return svg `
         <svg width="174" height="138" viewBox="0 0 174 138" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 19C16 16.7909 17.7909 15 20 15H75C77.2091 15 79 16.7909 79 19V47C79 49.2091 77.2091 51 75 51H20C17.7909 51 16 49.2091 16 47V19Z" fill="var(--secondary-clear)"/>
        <path d="M95 19C95 16.7909 96.7909 15 99 15H154C156.209 15 158 16.7909 158 19V47C158 49.2091 156.209 51 154 51H99C96.7909 51 95 49.2091 95 47V19Z" fill="var(--secondary-clear)"/>
        <path d="M16 69C16 67.8954 16.8954 67 18 67H156C157.105 67 158 67.8954 158 69C158 70.1046 157.105 71 156 71H18C16.8954 71 16 70.1046 16 69Z" fill="var(--primary-emphasis)"/>
        <path d="M16 91C16 88.7909 17.7909 87 20 87H48.6667C50.8758 87 52.6667 88.7909 52.6667 91V119C52.6667 121.209 50.8758 123 48.6667 123H20C17.7909 123 16 121.209 16 119V91Z" fill="var(--primary-clear)"/>
        <path d="M68.6667 91C68.6667 88.7909 70.4576 87 72.6667 87H101.333C103.543 87 105.333 88.7909 105.333 91V119C105.333 121.209 103.543 123 101.333 123H72.6668C70.4576 123 68.6667 121.209 68.6667 119V91Z" fill="var(--primary-clear)"/>
        <path d="M121.333 91C121.333 88.7909 123.124 87 125.333 87H154C156.209 87 158 88.7909 158 91V119C158 121.209 156.209 123 154 123H125.333C123.124 123 121.333 121.209 121.333 119V91Z" fill="var(--primary-clear)"/>
        </svg>
`;
            }
        }
    }
};
__decorate([
    property({ type: Array })
], MoleculeAddWidgetComponent.prototype, "fItems", void 0);
__decorate([
    event('fClick')
], MoleculeAddWidgetComponent.prototype, "fClick", void 0);
MoleculeAddWidgetComponent = __decorate([
    customElement('molecule-add-widget')
], MoleculeAddWidgetComponent);
export { MoleculeAddWidgetComponent };
export const AddWidget = createComponent({
    tagName: 'molecule-add-widget',
    elementClass: MoleculeAddWidgetComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});
