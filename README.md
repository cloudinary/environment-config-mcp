# Cloudinary Environment Config MCP Server


<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Cloudinary Environment Config MCP Server](#cloudinary-environment-config-mcp-server)
  * [Installation](#installation)
  * [Configuration](#configuration)
  * [Authentication](#authentication)
  * [Available Tools](#available-tools)
* [Development](#development)
  * [Building from Source](#building-from-source)
  * [Contributions](#contributions)
  * [Progressive Discovery](#progressive-discovery)

<!-- End Table of Contents [toc] -->

<!-- Start Installation [installation] -->
## Installation

<details>
<summary>Claude Desktop</summary>

Install the MCP server as a Desktop Extension using the pre-built [`mcp-server.mcpb`](https://github.com/cloudinary/environment-config-mcp/releases/download/v0.6.0/mcp-server.mcpb) file:

Simply drag and drop the [`mcp-server.mcpb`](https://github.com/cloudinary/environment-config-mcp/releases/download/v0.6.0/mcp-server.mcpb) file onto Claude Desktop to install the extension.

The MCP bundle package includes the MCP server and all necessary configuration. Once installed, the server will be available without additional setup.

> [!NOTE]
> MCP bundles provide a streamlined way to package and distribute MCP servers. Learn more about [Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions).

</details>

<details>
<summary>Cursor</summary>

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=CloudinaryEnvConfig&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyJAY2xvdWRpbmFyeS9lbnZpcm9ubWVudC1jb25maWctbWNwIiwic3RhcnQiLCItLWFwaS1rZXkiLCIiLCItLWFwaS1zZWNyZXQiLCIiLCItLWNsb3VkLW5hbWUiLCIiXX0=)

Or manually:

1. Open Cursor Settings
2. Select Tools and Integrations
3. Select New MCP Server
4. If the configuration file is empty paste the following JSON into the MCP Server Configuration:

```json
{
  "command": "npx",
  "args": [
    "@cloudinary/environment-config-mcp",
    "start",
    "--api-key",
    "",
    "--api-secret",
    "",
    "--cloud-name",
    ""
  ]
}
```

</details>

<details>
<summary>Claude Code CLI</summary>

```bash
claude mcp add CloudinaryEnvConfig -- npx -y @cloudinary/environment-config-mcp start --api-key  --api-secret  --cloud-name 
```

</details>
<details>
<summary>Gemini</summary>

```bash
gemini mcp add CloudinaryEnvConfig -- npx -y @cloudinary/environment-config-mcp start --api-key  --api-secret  --cloud-name 
```

</details>
<details>
<summary>Windsurf</summary>

Refer to [Official Windsurf documentation](https://docs.windsurf.com/windsurf/cascade/mcp#adding-a-new-mcp-plugin) for latest information

1. Open Windsurf Settings
2. Select Cascade on left side menu
3. Click on `Manage MCPs`. (To Manage MCPs you should be signed in with a Windsurf Account)
4. Click on `View raw config` to open up the mcp configuration file.
5. If the configuration file is empty paste the full json

```bash
{
  "command": "npx",
  "args": [
    "@cloudinary/environment-config-mcp",
    "start",
    "--api-key",
    "",
    "--api-secret",
    "",
    "--cloud-name",
    ""
  ]
}
```
</details>
<details>
<summary>VS Code</summary>

[![Install in VS Code](https://img.shields.io/badge/VS_Code-VS_Code?style=flat-square&label=Install%20CloudinaryEnvConfig%20MCP&color=0098FF)](vscode://ms-vscode.vscode-mcp/install?name=CloudinaryEnvConfig&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyJAY2xvdWRpbmFyeS9lbnZpcm9ubWVudC1jb25maWctbWNwIiwic3RhcnQiLCItLWFwaS1rZXkiLCIiLCItLWFwaS1zZWNyZXQiLCIiLCItLWNsb3VkLW5hbWUiLCIiXX0=)

Or manually:

Refer to [Official VS Code documentation](https://code.visualstudio.com/api/extension-guides/ai/mcp) for latest information

1. Open [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)
1. Search and open `MCP: Open User Configuration`. This should open mcp.json file
2. If the configuration file is empty paste the full json

```bash
{
  "command": "npx",
  "args": [
    "@cloudinary/environment-config-mcp",
    "start",
    "--api-key",
    "",
    "--api-secret",
    "",
    "--cloud-name",
    ""
  ]
}
```

</details>
<details>
<summary> Stdio installation via npm </summary>
To start the MCP server, run:

```bash
npx @cloudinary/environment-config-mcp start --api-key  --api-secret  --cloud-name 
```

For a full list of server arguments, run:

```
npx @cloudinary/environment-config-mcp --help
```

</details>
<!-- End Installation [installation] -->

## Configuration

### Environment Variables

The MCP server supports the following environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name | Yes |
| `CLOUDINARY_API_KEY` | Your Cloudinary API key | Yes |
| `CLOUDINARY_API_SECRET` | Your Cloudinary API secret | Yes |
| `CLOUDINARY_URL` | Complete Cloudinary URL (alternative to individual vars) | No |

### CLOUDINARY_URL Format

You can use a single `CLOUDINARY_URL` instead of individual variables:

```bash
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

<!-- Start Authentication [security] -->
## Authentication

The MCP server uses your Cloudinary API key and secret for authentication:

```json
{
  "env": {
    "CLOUDINARY_CLOUD_NAME": "demo",
    "CLOUDINARY_API_KEY": "123456789012345",
    "CLOUDINARY_API_SECRET": "abcdefghijklmnopqrstuvwxyz12"
  }
}
```

<!-- End Authentication [security] -->

## Available Tools

The MCP server exposes Cloudinary's Environment Configuration API as tools. Use your AI application to discover and invoke the available tools for managing transformations, upload presets, streaming profiles, triggers, and upload mappings.

### Usage Examples

#### Example 1: Manage Named Transformations

```
1. List transformations: "Show me all named transformations in my account"
2. Create transformation: "Create a named transformation 't_thumbnail' with 'c_fill,w_200,h_200'"
3. Update transformation: "Update transformation 't_thumbnail' to add sharpen effect"
4. Delete transformation: "Delete the transformation named 't_old_banner'"
```

#### Example 2: Configure Upload Presets

```
1. List presets: "Show all my upload presets"
2. Create preset: "Create an upload preset named 'user_avatars' with auto tagging enabled"
3. Get details: "Show me the configuration for upload preset 'product_images'"
4. Update preset: "Update 'user_avatars' preset to use 'square' eager transformation"
```

#### Example 3: Manage Streaming Profiles

```
1. List profiles: "Show all streaming profiles"
2. Get profile: "Get details for the 'hd' streaming profile"
3. Create profile: "Create a custom streaming profile for 4K video"
4. Update profile: "Update the 'mobile' profile with lower bitrate settings"
```

#### Example 4: Configure Webhooks (Triggers)

```
1. List triggers: "Show all webhook triggers configured in my account"
2. Create trigger: "Create a webhook trigger for upload events to https://myapp.com/webhooks"
3. Update trigger: "Update the webhook URL for trigger [trigger-id]"
4. Delete trigger: "Delete the webhook trigger [trigger-id]"
```

#### Example 5: Manage Upload Mappings

```
1. List mappings: "Show all upload folder mappings"
2. Create mapping: "Map folder 'blog' to template 'https://example.com/blog/%s'"
3. Update mapping: "Update the mapping for 'blog' folder"
4. Delete mapping: "Remove the upload mapping for 'old-site' folder"
```

# Development

## Building from Source

### Prerequisites
- Node.js v20 or higher
- npm, pnpm, bun, or yarn

### Build Steps

```bash
# Clone the repository
git clone https://github.com/cloudinary/environment-config-mcp.git
cd environment-config-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Run locally
npm start
```

### Project Structure

```
environment-config-mcp/
├── src/
│   ├── hooks/              # Custom authentication hooks
│   ├── mcp-server/         # MCP server implementation
│   │   ├── server.ts       # Main server (auto-generated)
│   │   └── tools/          # Generated tool wrappers
│   ├── funcs/              # API function implementations
│   └── models/             # Type definitions
├── .github/
│   └── workflows/          # CI/CD workflows
└── .speakeasy/             # Speakeasy configuration
```

## Contributions

While we value contributions to this MCP Server, the code is generated programmatically. Any manual changes to generated files will be overwritten on the next generation.

**What you can contribute:**
- ✅ Custom hooks in `src/hooks/`
- ✅ Documentation improvements
- ✅ Bug reports and feature requests

**Generated files (do not edit):**
- ❌ `src/mcp-server/server.ts`
- ❌ `src/mcp-server/tools/*.ts`
- ❌ `src/funcs/*.ts`
- ❌ `src/models/*.ts`

We look forward to hearing your feedback. Feel free to open a PR or issue with a proof of concept and we'll do our best to include it in a future release.

---

### MCP Server Created by [Speakeasy](https://www.speakeasy.com/?utm_source=environment-config-mcp&utm_campaign=mcp-typescript)

<!-- Start Progressive Discovery [dynamic-mode] -->
## Progressive Discovery

MCP servers with many tools can bloat LLM context windows, leading to increased token usage and tool confusion. Dynamic mode solves this by exposing only a small set of meta-tools that let agents progressively discover and invoke tools on demand.

To enable dynamic mode, pass the `--mode dynamic` flag when starting your server:

```jsonc
{
  "mcpServers": {
    "CloudinaryEnvConfig": {
      "command": "npx",
      "args": ["@cloudinary/environment-config-mcp", "start", "--mode", "dynamic"],
      // ... other server arguments
    }
  }
}
```

In dynamic mode, the server registers only the following meta-tools instead of every individual tool:

- **`list_tools`**: Lists all available tools with their names and descriptions.
- **`describe_tool`**: Returns the input schema for one or more tools by name.
- **`execute_tool`**: Executes a tool by name with the provided input parameters.
- **`list_scopes`**: Lists the scopes available on the server.

This approach significantly reduces the number of tokens sent to the LLM on each request, which is especially useful for servers with a large number of tools.

You can combine dynamic mode with scope and tool filters:

```jsonc
{
  "mcpServers": {
    "CloudinaryEnvConfig": {
      "command": "npx",
      "args": ["@cloudinary/environment-config-mcp", "start", "--mode", "dynamic", "--scope", "admin"],
      // ... other server arguments
    }
  }
}
```
<!-- End Progressive Discovery [dynamic-mode] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

