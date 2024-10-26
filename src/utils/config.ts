import { readFileSync } from "fs";
import * as yaml from "yaml";

let config: any;
const YAML_CONFIG_FILE_PATH = "../config.yml";

try {
  const yamlFile = readFileSync(YAML_CONFIG_FILE_PATH, "utf8");
  config = yaml.parse(yamlFile).config;
  console.log("CONFIG LOADED -> YAML");
} catch (error) {
  console.error("Error loading config file: ", error);
}

export default config;
