---
layout: 2018design-project
title: SMS Backup Reader (PC/Mac/*nix/Web)
excerpt: SMS Backup Reader reads SMS backup files from Android devices
permalink: /sms-backup-reader/
---
<div class="center"><amp-img src="/images/smsBackupReader_v0.7.png" width="128" height="128" alt="SMS Backup Reader Icon"></amp-img></div>

# SMS Backup Reader (PC/Mac/*nix/Web)
{: .center}

SMS Backup Reader is designed to read the XML backup files produced by the Android app [SMS Backup & Restore](https://play.google.com/store/apps/details?id=com.riteshsahu.SMSBackupRestore){:target="_blank"}{:rel="noopener"} by Ritesh/synctech. There are two versions of SMS Backup Reader. They are both open source and are published under the name **devadvance**.

## SMS Backup Reader 2 (Web app)

*Currently in alpha!* This is an Angular-based web app designed to read the XML backup files produced by the Android app SMS Backup & Restore. It is designed to work in modern browsers, including Chrome, Firefox, Edge, and Safari. This app works locally and your SMS data **does not** leave your machine.

[OPEN THE APP](/sms-backup-reader-2/){:target="_blank"}{: .pure-button .pure-button-primary }
[SOURCE CODE & ISSUES (GITHUB)](https://github.com/devadvance/sms-backup-reader-2){:target="_blank"}{:rel="noopener"}{: .pure-button .pure-button-primary }
{: .center}


## SMS Backup Reader (PC/Mac/*nix) [Legacy]

The original SMS Backup Reader is a Java program. This program runs on Windows, MacOS (OS X), Linux, and any other OS with Java installed.

[DOWNLOAD LATEST (GITHUB)](https://github.com/devadvance/smsbackupreader/releases/latest){:target="_blank"}{:rel="noopener"}{: .pure-button .pure-button-primary }
[SOURCE CODE & ISSUES (GITHUB)](https://github.com/devadvance/smsbackupreader){:target="_blank"}{:rel="noopener"}{: .pure-button .pure-button-primary }
{: .center}

## How to use SMS Backup Reader (legacy, English)

*Note: you can read the latest version of this document on the GitHub wiki here:
[How to use SMS Backup Reader | GitHub - devadvance/smsbackupreader](https://github.com/devadvance/smsbackupreader/wiki/How-to-use-SMS-Backup-Reader){:target="_blank"}{:rel="noopener"}*

{% capture my-include %}{% include How-to-use-SMS-Backup-Reader.md %}{% endcapture %}
{{ my-include | markdownify }}