import {
  useCallback,
  useState,
  MouseEvent,
  ChangeEvent,
  FormEvent,
} from "react";
import { SideNavbarWrapper } from "./style";

// assets
import { theme } from "@/assets";

// project
import {
  Box,
  Tabs,
  Tab,
  FormControl,
  TextField,
  Button,
  Text,
  Divider,
} from "@/ui";
import { Spot } from "@/components";

interface TabItem {
  key: string;
  title: string;
}

export const SideNavbar = () => {
  const tabItems: TabItem[] = [
    {
      key: "scheduled",
      title: "방문예정",
    },
    {
      key: "completed",
      title: "방문완료",
    },
    {
      key: "bookmark",
      title: "즐겨찾기",
    },
  ];

  const [tabValue, setTabValue] = useState<TabItem>(tabItems[0]);
  const [keyword, setKeyword] = useState<string>("");

  const handleTabValueChange = useCallback(
    (_: MouseEvent, selectedTabItem: TabItem) => {
      setTabValue(selectedTabItem);
    },
    [],
  );

  const handleKeywordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setKeyword(value);
    },
    [],
  );

  const handleKeywordSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SideNavbarWrapper $isOpen={true}>
      <div>
        <Box sx={{ p: "10px" }}>
          <Text sx={{ fontWeight: theme.font.weight.fw700, fontSize: "22px" }}>
            HoBom PIN
          </Text>
        </Box>
        <Divider sx={{ mb: "10px" }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Tabs
            sx={{ width: "100%" }}
            value={tabValue}
            onChange={handleTabValueChange}
          >
            {tabItems.map((tab: TabItem) => (
              <Tab key={tab.key} label={tab.title} value={tab} />
            ))}
          </Tabs>
        </Box>
        <FormControl
          sx={{ p: "0px", pt: "20px", pb: "20px" }}
          onSubmit={handleKeywordSubmit}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <TextField
              type="text"
              placeholder="검색어를 입력해 주세요."
              name="keyword"
              value={keyword}
              onChange={handleKeywordChange}
            />
            <Button
              type="submit"
              variant="fill"
              label="검색"
              size="sm"
              sx={{ width: "80px" }}
            />
          </Box>
        </FormControl>
        <Divider sx={{ mb: "10px" }} />
      </div>
      <Box sx={{ height: "calc(100vh - 240px)", overflowY: "auto" }}>
        <Spot
          name="호랑이카페"
          rating={5}
          spotImageUrl="https://picsum.photos/id/1/500/500"
          address="중구 을지로 157"
          business="영업 중 ⋅ 오후 9:00에 영업 종료"
          mealKind="매장 내 식사 ⋅ 테이크아웃"
        />
        <Spot
          name="호랑이카페"
          rating={5}
          spotImageUrl="https://picsum.photos/id/1/500/500"
          address="중구 을지로 157"
          business="영업 중 ⋅ 오후 9:00에 영업 종료"
          mealKind="매장 내 식사 ⋅ 테이크아웃"
        />
        <Spot
          name="호랑이카페"
          rating={5}
          spotImageUrl="https://picsum.photos/id/1/500/500"
          address="중구 을지로 157"
          business="영업 중 ⋅ 오후 9:00에 영업 종료"
          mealKind="매장 내 식사 ⋅ 테이크아웃"
        />
        <Spot
          name="호랑이카페"
          rating={5}
          spotImageUrl="https://picsum.photos/id/1/500/500"
          address="중구 을지로 157"
          business="영업 중 ⋅ 오후 9:00에 영업 종료"
          mealKind="매장 내 식사 ⋅ 테이크아웃"
        />
        <Spot
          name="호랑이카페"
          rating={5}
          spotImageUrl="https://picsum.photos/id/1/500/500"
          address="중구 을지로 157"
          business="영업 중 ⋅ 오후 9:00에 영업 종료"
          mealKind="매장 내 식사 ⋅ 테이크아웃"
        />
        <Spot
          name="호랑이카페"
          rating={5}
          spotImageUrl="https://picsum.photos/id/1/500/500"
          address="중구 을지로 157"
          business="영업 중 ⋅ 오후 9:00에 영업 종료"
          mealKind="매장 내 식사 ⋅ 테이크아웃"
        />
        <Spot
          name="호랑이카페"
          rating={5}
          spotImageUrl="https://picsum.photos/id/1/500/500"
          address="중구 을지로 157"
          business="영업 중 ⋅ 오후 9:00에 영업 종료"
          mealKind="매장 내 식사 ⋅ 테이크아웃"
        />
        <Spot
          name="호랑이카페"
          rating={5}
          spotImageUrl="https://picsum.photos/id/1/500/500"
          address="중구 을지로 157"
          business="영업 중 ⋅ 오후 9:00에 영업 종료"
          mealKind="매장 내 식사 ⋅ 테이크아웃"
        />
      </Box>
    </SideNavbarWrapper>
  );
};
