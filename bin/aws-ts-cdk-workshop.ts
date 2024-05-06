#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsTsCdkWorkshopStack } from '../lib/aws-ts-cdk-workshop-stack';

const app = new cdk.App();
new AwsTsCdkWorkshopStack(app, 'AwsTsCdkWorkshopStack');
