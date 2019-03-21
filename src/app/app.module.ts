import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule, MatRippleModule, MatIconModule, MatTooltipModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatMenuModule, MatSliderModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { HomeComponent } from './home/home.component';
import { VirtualAgentCreatorComponent } from './virtual-agent-creator/virtual-agent-creator.component';
import { ManageAgentComponent } from './virtual-agent-creator/manage-agent/manage-agent.component';
import { AgentComponentsComponent } from './virtual-agent-creator/agent-components/agent-components.component';
import { CampaignServicesComponent } from './campaign-services/campaign-services.component';
import { EventsComponent } from './virtual-agent-creator/events/events.component';
import { IntentsComponent } from './virtual-agent-creator/intents/intents.component';
import { EntitiesComponent } from './virtual-agent-creator/entities/entities.component';
import { TrainingComponent } from './virtual-agent-creator/training/training.component';
import { TestAgentConsoleComponent } from './virtual-agent-creator/test-agent-console/test-agent-console.component';
import { AuthComponent } from './auth/auth.component';
import { CreateEventComponent } from './virtual-agent-creator/events/create-event/create-event.component';
import { QuickReplyComponent } from './virtual-agent-creator/agent-components/quick-reply/quick-reply.component';
import { ImageComponentComponent } from './virtual-agent-creator/agent-components/image-component/image-component.component';
import { TextComponentComponent } from './virtual-agent-creator/agent-components/text-component/text-component.component';
import { TypingComponentComponent } from './virtual-agent-creator/agent-components/typing-component/typing-component.component';
import { CarouselComponentComponent } from './virtual-agent-creator/agent-components/carousel-component/carousel-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    ContentAreaComponent,
    HomeComponent,
    ManageAgentComponent,
    VirtualAgentCreatorComponent,
    AgentComponentsComponent,
    CampaignServicesComponent,
    EventsComponent,
    IntentsComponent,
    EntitiesComponent,
    TrainingComponent,
    TestAgentConsoleComponent,
    AuthComponent,
    CreateEventComponent,
    QuickReplyComponent,
    ImageComponentComponent,
    TextComponentComponent,
    TypingComponentComponent,
    CarouselComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
