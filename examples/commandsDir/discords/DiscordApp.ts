import { CommandNotFound, Discord, CommandMessage } from "../../../src";
import * as Path from "path";
import { Bye } from "../commands/Bye";

@Discord({
  prefix: "!",
  importCommands: [
    Path.join(__dirname, "..", "commands", "*.ts"),
    Bye
  ]
})
export class DiscordApp {
  @CommandNotFound({ prefix: "!" })
  notFoundA(commad: CommandMessage) {
    commad.reply("Command not found");
  }
}
