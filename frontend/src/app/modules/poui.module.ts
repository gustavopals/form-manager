import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import {
  PoAccordionModule,
  PoButtonModule,
  PoContainerModule,
  PoDividerModule,
  PoDropdownModule,
  PoFieldModule,
  PoI18nConfig,
  PoI18nModule,
  PoInfoModule,
  PoListViewModule,
  PoModalModule,
  PoPopoverModule,
  PoPopupModule,
  PoTableModule,
  PoTabsModule,
  PoTagModule,
  PoTooltipModule,
} from "@po-ui/ng-components"
import {
  PoPageDynamicSearchModule,
  PoTemplatesModule,
} from "@po-ui/ng-templates"
import { generalPt } from "../shared/i18/generalPt"
import { generalEn } from "../shared/i18/generalEn"

const i18nConfig: PoI18nConfig = {
  default: {
    language: 'en-US',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn
    }
  }
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoTabsModule,
    PoButtonModule,
    PoTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    PoFieldModule,
    PoDividerModule,
    PoTableModule,
    PoModalModule,
    PoTagModule,
    PoPopoverModule,
    PoTemplatesModule,
    PoAccordionModule,
    PoDropdownModule,
    PoPageDynamicSearchModule,
    PoPopupModule,
    PoListViewModule,
    PoInfoModule,
    PoContainerModule,
    PoI18nModule.config(i18nConfig)
  ],
  exports: [],
  providers: [],
})
export class PouiModule { }
