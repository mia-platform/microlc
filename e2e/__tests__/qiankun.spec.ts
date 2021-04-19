/*
 * Copyright 2021 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {expect, test} from '@playwright/test'

import {closeSidemenu, openSideMenu} from '../utils/utils'

test('Correctly load qiankun plugin', async ({page}) => {
  await openSideMenu(page)
  await page.click('"Qiankun plugin 1"')
  await closeSidemenu(page)
  await page.textContent('"Go to other qiankun plugin"')
  const arrivedHere = await page.$('"You arrived here from:"')
  expect(arrivedHere).not.toBeTruthy()
});

test('Correctly load another qiankun plugin', async ({page}) => {
  await openSideMenu(page)
  await page.click('"Qiankun plugin 1"')
  await closeSidemenu(page)
  await page.click('"Go to other qiankun plugin"')
  await page.textContent('"You arrived here from:"')
  await page.textContent('"qiankun1"')
});

test('Correctly go to another qiankun plugin', async ({page}) => {
  await openSideMenu(page)
  await page.click('"Qiankun plugin 2"')
  await closeSidemenu(page)
  await page.click('"Go to other qiankun plugin"')
  await page.textContent('"You arrived here from:"')
  await page.textContent('"qiankun2"')
});

test('Correctly switch from and to another qiankun plugin', async ({page}) => {
  await openSideMenu(page)
  await page.click('"Qiankun plugin 2"')
  await closeSidemenu(page)
  await page.click('"Go to other qiankun plugin"')
  await page.textContent('"You arrived here from:"')
  await page.textContent('"qiankun2"')
  await page.click('"Go to other qiankun plugin"')
  await page.textContent('"You arrived here from:"')
  await page.textContent('"qiankun1"')
});
