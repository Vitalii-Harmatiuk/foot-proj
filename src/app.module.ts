import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersController } from './players/players.controller';
import { TeamsController } from './teams/teams.controller';
import { MatchesController } from './matches/matches.controller';
import { PlayersService } from './players/players.service';
import { TeamsService } from './teams/teams.service';
import { MatchesService } from './matches/matches.service';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { MatchesModule } from './matches/matches.module';

@Module({
  imports: [PlayersModule, TeamsModule, MatchesModule],
  controllers: [AppController, PlayersController, TeamsController, MatchesController],
  providers: [AppService, PlayersService, TeamsService, MatchesService],
})
export class AppModule {}
