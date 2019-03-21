import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from '../app/auth/auth.component';
import { HomeComponent } from '../app/home/home.component';
import { VirtualAgentCreatorComponent } from '../app/virtual-agent-creator/virtual-agent-creator.component';
import { ManageAgentComponent } from '../app/virtual-agent-creator/manage-agent/manage-agent.component';
import { AgentComponentsComponent } from '../app/virtual-agent-creator/agent-components/agent-components.component';
import { QuickReplyComponent } from '../app/virtual-agent-creator/agent-components/quick-reply/quick-reply.component';
import { ImageComponentComponent } from '../app/virtual-agent-creator/agent-components/image-component/image-component.component';
import { TextComponentComponent } from '../app/virtual-agent-creator/agent-components/text-component/text-component.component';
import { TypingComponentComponent } from '../app/virtual-agent-creator/agent-components/typing-component/typing-component.component';
import { CarouselComponentComponent } from '../app/virtual-agent-creator/agent-components/carousel-component/carousel-component.component';

import { EventsComponent } from '../app/virtual-agent-creator/events/events.component';
import { CreateEventComponent } from '../app/virtual-agent-creator/events/create-event/create-event.component';
import { IntentsComponent } from '../app/virtual-agent-creator/intents/intents.component';
import { EntitiesComponent } from '../app/virtual-agent-creator/entities/entities.component';
import { TrainingComponent } from '../app/virtual-agent-creator/training/training.component';
import { CampaignServicesComponent } from '../app/campaign-services/campaign-services.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'virtual-agent-creator', component: VirtualAgentCreatorComponent },
  { path: 'virtual-agent-creator/manage-agent', component: ManageAgentComponent },
  { path: 'virtual-agent-creator/events', component: EventsComponent },
  { path: 'virtual-agent-creator/events/create-event', component: CreateEventComponent },
  { path: 'virtual-agent-creator/intents', component: IntentsComponent },
  { path: 'virtual-agent-creator/components', component: AgentComponentsComponent },
  { path: 'virtual-agent-creator/components/create-component/quick-reply', component: QuickReplyComponent },
  { path: 'virtual-agent-creator/components/create-component/image', component: ImageComponentComponent },
  { path: 'virtual-agent-creator/components/create-component/text', component: TextComponentComponent },
  { path: 'virtual-agent-creator/components/create-component/typing', component: TypingComponentComponent },
  { path: 'virtual-agent-creator/components/create-component/carousel', component: CarouselComponentComponent },
  { path: 'virtual-agent-creator/entities', component: EntitiesComponent },
  { path: 'virtual-agent-creator/training', component: TrainingComponent },
  { path: 'campaign-services', component: CampaignServicesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes),
    RouterModule.forRoot([
      { path: "", component: HomeComponent }
    ], {
        useHash: true
      }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
