const { Plugin, Notice } = require("obsidian");

module.exports = class AptlyPlugin extends Plugin {
	async onload() {
		console.log("Aptly plugin loaded");

		this.addRibbonIcon("zap", "Aptly", () => {
			new Notice("Aptly plugin is working!");
		});

		this.addCommand({
			id: "aptly-test-command",
			name: "Test Aptly Plugin",
			callback: () => {
				new Notice("Hello from Aptly!");
			}
		});
	}

	onunload() {
		console.log("Aptly plugin unloaded");
	}
};